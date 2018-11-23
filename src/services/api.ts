import { stringify } from 'query-string'
import config from 'src/constants/config'

type Params = { [key: string]: any }

type Settings = {
  method?: string;
  params?: Params;
  data?: Params;
  token?: string;
}

export function parseEndpoint(endpoint: string, params?: Params) {
  const url = endpoint.startsWith('http') ? endpoint : config.apiUrl + endpoint
  const querystring = params ? `?${stringify(params)}` : ''
  return `${url}${querystring}`
}

export function parseSettings({
  method,
  data,
  token,
}: Settings) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  const settings = {
    body: data ? JSON.stringify(data) : undefined,
    method,
    headers: Object.assign(headers, token && { Authorization: token }),
  }

  return settings
}

export const checkStatus = async (response: Response) => {
  if (response.ok) {
    return response
  }

  throw await response.json()
}

export const parseJSON = (response: Response) => response.json()

export class Client {
  token = ''

  setToken = (token: string) => {
    this.token = token
  }

  get = (endpoint: string, settings: Settings) =>
    this.request(endpoint, { method: 'GET', ...settings, token: this.token })

  delete = (endpoint: string, settings: Settings) =>
    this.request(endpoint, { method: 'DELETE', ...settings, token: this.token })

  post = (endpoint: string, settings: Settings) =>
    this.request(endpoint, { method: 'POST', ...settings, token: this.token })

  put = (endpoint: string, settings: Settings) =>
    this.request(endpoint, { method: 'PUT', ...settings, token: this.token })

  request = (endpoint: string, settings: Settings) => fetch(
    parseEndpoint(endpoint, settings.params),
    parseSettings(settings),
  ).then(checkStatus).then(parseJSON)
}

export const api = new Client()
