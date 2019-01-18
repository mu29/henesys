import cheerio from 'react-native-cheerio'

const CHARACTER_INFO_URL = 'https://maplestory.nexon.com/Ranking/World/Total'
const INVEN_BASE_URL = 'http://m.inven.co.kr'

export class Parser {
  getCharacterInfo = async (name: string) => {
    const $ = await this.parse(`${CHARACTER_INFO_URL}?c=${name}`)
    const search = $('tr.search_com_chk')

    return {
      name,
      job: search.find('dd').eq(0).text().split('/')[1].trim(),
      level: parseInt((search.find('td').eq(2).text().match(/\d+/) || ['0'])[0], 10),
      imageUrl: search.find('.char_img').find('img').attr('src').replace('http:', 'https:').replace('/180/', '/'),
    }
  }

  getArticleList = async (board: number, page: number) => {
    const $ = await this.parse(`${INVEN_BASE_URL}/board/powerbbs.php?come_idx=${board}&p=${page}`)
    const articles = $('li.articleSubject').not('.articleNotice')

    return articles.map((_, article) => ({
      id: Number($(article).find('.subject').eq(0).attr('href').replace(/.*&l=/, '')),
      title: $(article).find('.title').eq(0).text().replace(/\[[가-힣]+\]/, '').trim(),
      author: $(article).find('.writer').eq(0).text().replace(/Lv\.\d+/, '').trim(),
      href: $(article).find('.subject').eq(0).attr('href'),
      viewCount: Number($(article).find('.hit').eq(0).text().replace('조회:', '')),
      commentCount: Number($(article).find('.cmtWrapForList').eq(0).text() || 0),
      createdAt: new Date($(article).find('.postdate').find('span').attr('title')),
    })).toArray()
  }

  getArticleInfo = async (id: number) => {}

  parse = (url: string) => fetch(url)
    .then(r => r.text())
    .then(r => cheerio.load(r))
}

export const parser = new Parser()
