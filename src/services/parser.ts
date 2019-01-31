import cheerio from 'react-native-cheerio'
import { stringify } from 'query-string'
import { GetArticleListParams } from 'src/store/actions'

const CHARACTER_INFO_URL = 'https://maplestory.nexon.com/Ranking/World/Total'
const INVEN_BASE_URL = 'http://m.inven.co.kr'

export class Parser {
  getCharacterInfo = async (name: string) => {
    return await this.getWorldCharacterInfo(name) || await this.getRebootCharacterInfo(name)
  }

  getWorldCharacterInfo = async (name: string) => {
    const $ = await this.parse(`${CHARACTER_INFO_URL}?c=${name}`)
    const search = $('tr.search_com_chk')

    if (search.length === 0) {
      return undefined
    }

    return {
      name,
      job: search.find('dd').eq(0).text().split('/')[1].trim(),
      level: parseInt((search.find('td').eq(2).text().match(/\d+/) || ['0'])[0], 10),
      imageUrl: search.find('.char_img').find('img').attr('src').replace('http:', 'https:').replace('/180/', '/'),
    }
  }

  getRebootCharacterInfo = async (name: string) => {
    const $ = await this.parse(`${CHARACTER_INFO_URL}?c=${name}&w=254`)
    const search = $('tr.search_com_chk')

    if (search.length === 0) {
      return undefined
    }

    return {
      name,
      job: search.find('dd').eq(0).text().split('/')[1].trim(),
      level: parseInt((search.find('td').eq(2).text().match(/\d+/) || ['0'])[0], 10),
      imageUrl: search.find('.char_img').find('img').attr('src').replace('http:', 'https:').replace('/180/', '/'),
    }
  }

  getArticleList = async ({ board, category, bestOnly, page }: GetArticleListParams) => {
    const params = {
      come_idx: board,
      p: page,
      my: bestOnly ? 'chuchu' : '',
      category,
    }
    const $ = await this.parse(`${INVEN_BASE_URL}/board/powerbbs.php?${stringify(params)}`)
    const articles = $('li.articleSubject').not('.articleNotice')

    return articles
      .map((_, article) => ({
        id: Number($(article).find('.subject').eq(0).attr('href').replace(/.*&l=/, '')),
        title: $(article).find('.title').eq(0).text().replace(/\[[가-힣\(\)]+\]/, '').trim(),
        author: $(article).find('.writer').eq(0).text().replace(/Lv\.\d+/, '').trim(),
        href: $(article).find('.subject').eq(0).attr('href'),
        viewCount: Number($(article).find('.hit').eq(0).text().replace('조회:', '').trim()),
        voteCount: Number($(article).find('.req').eq(0).text().replace('추천:', '').trim()),
        commentCount: Number($(article).find('.cmtWrapForList').eq(0).text() || 0),
        createdAt: $(article).find('.postdate').find('span').attr('title'),
      }))
      .toArray()
      .map(article => Object.assign(article, { board, category }))
  }

  getArticleInfo = async (board: number, category: string, id: number) => {
    const $ = await this.parse(`${INVEN_BASE_URL}/board/powerbbs.php?come_idx=${board}&l=${id}`)
    const info = $('div.articleSubject')
    const content = ($('div.articleContent').html() || '')
      .replace(/\<br\>\<br\>/g, '<br>')
      .replace(/\<p\>\<\/p\>/g, '')
      .replace(/\<p\>\<br\>\<\/p\>/g, '')

    return {
      board,
      category,
      id,
      title: $(info).find('.title').eq(0).text().replace(/\[[가-힣\(\)]+\]/, '').trim(),
      author: $(info).find('.writer').eq(0).text().replace('글쓴이:', '').trim(),
      viewCount: Number($(info).find('.hit').eq(0).text().replace('조회:', '').trim()),
      voteCount: Number($(info).find('.req').eq(0).text().replace('추천:', '').trim()),
      commentCount: Number($(info).find('.comment').eq(0).text().replace('댓글:', '').replace('개', '').trim()),
      createdAt: $(info).find('.postdate').find('span').eq(1).text(),
      content,
    }
  }

  getCommentList = async (board: number, id: number, page: number) => {
    const comments = await fetch(`${INVEN_BASE_URL}/common/board/comment.xml.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: stringify({
        comeidx: board,
        articlecode: id,
        sortorder: 'date',
        titles: page * 100,
      }),
    }).then(r => r.text())

    const parseComment = (_: number, comment: CheerioElement) => ({
      id: `${$(comment).attr('cmtpidx')}-${$(comment).attr('cmtidx')}`,
      author: $(comment).find('o_name').eq(0).text(),
      content: $(comment).find('o_comment').eq(0).text(),
      voteCount: Number($(comment).find('o_recommend').eq(0).text()),
      createdAt: $(comment).find('o_date').eq(0).text(),
      isReply: $(comment).attr('cmtidx') !== $(comment).attr('cmtpidx'),
    })
    const $ = cheerio.load(comments)

    return [
      ...$('bestitem').map(parseComment).toArray().map(c => Object.assign(c, { best: true })),
      ...$('item').map(parseComment).toArray(),
    ]
  }

  parse = (url: string) => fetch(url)
    .then(r => r.text())
    .then(r => cheerio.load(r))
}

export const parser = new Parser()
