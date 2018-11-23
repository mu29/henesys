import { EntityState } from './entity/selectors'
import { LoadingState } from './loading/selectors'
import { UserState } from './user/selectors'

export * from './entity/selectors'
export * from './loading/selectors'
export * from './user/selectors'

export type AppState = {
  entity: EntityState;
  loading: LoadingState;
  user: UserState;
}
