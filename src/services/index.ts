import { Client } from './api'
import { Parser } from './parser'

export interface Services {
  api: Client
  parser: Parser
}
