import { AccountState } from './account/selectors'
import { ArticleState } from './article/selectors'
import { CharacterState } from './character/selectors'
import { CommentState } from './comment/selectors'
import { EntityState } from './entity/selectors'
import { LoadingState } from './loading/selectors'
import { MissionState } from './mission/selectors'
import { ModalState } from './modal/selectors'

export * from './entity/selectors'
export * from './account/selectors'
export * from './article/selectors'
export * from './character/selectors'
export * from './comment/selectors'
export * from './loading/selectors'
export * from './mission/selectors'
export * from './modal/selectors'

export type AppState = {
  account: AccountState;
  article: ArticleState;
  character: CharacterState;
  comment: CommentState;
  entity: EntityState;
  loading: LoadingState;
  mission: MissionState;
  modal: ModalState;
}
