import cheerio from 'react-native-cheerio'

const USER_INFO_URL = 'https://maplestory.nexon.com/Common/Character/Detail'

export class Parser {
  getUserInfo = async (name: string) => {
    const $ = await this.parse(`${USER_INFO_URL}/${name}`)
    console.log($.html())
  }

  parse = (url: string) => fetch(url)
    .then(r => r.text())
    .then(r => cheerio.load(r))
}

export const parser = new Parser()
