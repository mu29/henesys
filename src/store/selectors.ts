import { EntityState } from './entity/selectors'
import { LoadingState } from './loading/selectors'
import { MissionState } from './mission/selectors'
import { CharacterState } from './character/selectors'

export * from './entity/selectors'
export * from './loading/selectors'
export * from './mission/selectors'
export * from './character/selectors'

export type AppState = {
  entity: EntityState;
  loading: LoadingState;
  mission: MissionState;
  character: CharacterState;
}
