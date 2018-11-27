import { EntityState } from './entity/selectors'
import { LoadingState } from './loading/selectors'
import { MissionState } from './mission/selectors'
import { UserState } from './user/selectors'

export * from './entity/selectors'
export * from './loading/selectors'
export * from './mission/selectors'
export * from './user/selectors'

export type AppState = {
  entity: EntityState;
  loading: LoadingState;
  mission: MissionState;
  user: UserState;
}
