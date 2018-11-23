import { EntityState } from './entity/selectors'
import { LoadingState } from './loading/selectors'

export * from './entity/selectors'
export * from './loading/selectors'

export type AppState = {
  entity?: EntityState;
  loading?: LoadingState;
}
