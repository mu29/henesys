import cheerio from 'react-native-cheerio'

const USER_INFO_URL = 'https://maplestory.nexon.com/Common/Character/Detail'

export class Parser {
  getUserInfo = async (name: string) => {
    const $ = await this.parse(`${USER_INFO_URL}/${name}`)
    return {
      name,
      job: $('.char_info').find('dd').eq(1).text().split('/')[1],
      level: parseInt(($('.char_info').find('dd').eq(0).text().match(/\d+/) || ['0'])[0], 10),
      imageUrl: $('.char_img').find('img').attr('src').replace('http:', 'https:').replace('/180/', '/'),
    }
  }

  parse = (url: string) => fetch(url)
    .then(r => r.text())
    .then(r => cheerio.load(r))
}

export const parser = new Parser()
