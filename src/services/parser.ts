import cheerio from 'react-native-cheerio'

const CHARACTER_INFO_URL = 'https://maplestory.nexon.com/Ranking/World'
export class Parser {
  getCharacterInfo = async (name: string) => {
    const $ = await this.parse(`${CHARACTER_INFO_URL}?c=${name}`)
    const search = $('.search_com_chk')
    search.find('td').eq(2).find('br').replaceWith('\n')
    return {
      name,
      job: search.find('dd').eq(0).text().split('/')[1],
      level: parseInt((search.find('td').eq(2).text().match(/\d+/) || ['0'])[0], 10),
      imageUrl: search.find('.char_img').find('img').attr('src').replace('http:', 'https:').replace('/180/', '/'),
    }
  }

  parse = (url: string) => fetch(url)
    .then(r => r.text())
    .then(r => cheerio.load(r))
}

export const parser = new Parser()
