import { SagaIterator } from 'redux-saga'
import { put, call, cancelled, Effect } from 'redux-saga/effects'

export interface AnyAction {
  type: any,
}

export type Meta = null | {[key: string]: any}

export interface Action<Payload> extends AnyAction {
  type: string,
  payload: Payload,
  error?: boolean,
  meta?: Meta,
}

export function isType<Payload>(
  action: AnyAction,
  actionCreator: ActionCreator<Payload>,
): action is Action<Payload> {
  return action.type === actionCreator.type
}

export type ActionCreator<Payload> = {
  type: string;
  match: (action: AnyAction) => action is Action<Payload>;
  (payload: Payload, meta?: Meta): Action<Payload>;
} & (Payload extends void
  ? {
    (payload?: Payload, meta?: Meta): Action<Payload>;
  }
  : {}
)

export type Success<Params, Result> =
  ({params: Params} | (Params extends void ? {params?: Params} : never)) &
  ({result: Result} | (Result extends void ? {result?: Result} : never))

export type Failure<Params, Error> =
  ({params: Params} | (Params extends void ? {params?: Params} : never)) &
  {error: Error}

export interface AsyncActionCreators<Params, Result, Error = {}> {
  type: string
  request: ActionCreator<Params>
  success: ActionCreator<Success<Params, Result>>
  failure: ActionCreator<Failure<Params, Error>>
}

export interface ActionCreatorFactory {
  <Payload = void>(
    type: string,
    commonMeta?: Meta,
    isError?: boolean,
  ): ActionCreator<Payload>

  <Payload = void>(
    type: string,
    commonMeta?: Meta,
    isError?: (payload: Payload) => boolean,
  ): ActionCreator<Payload>

  async<Params, Result, Error = {}>(
    type: string, commonMeta?: Meta,
  ): AsyncActionCreators<Params, Result, Error>
}

export function actionCreatorFactory(
  prefix?: string | null,
  defaultIsError: (payload: any) => boolean = p => p instanceof Error,
): ActionCreatorFactory {
  const actionTypes: {[type: string]: boolean} = {}

  const base = prefix ? `${prefix}/` : ''

  function actionCreator<Payload>(
    type: string,
    commonMeta?: Meta,
    isError: ((payload: Payload) => boolean) | boolean = defaultIsError,
  ) {
    const fullType = base + type

    if (__DEV__) {
      if (actionTypes[fullType]) {
        throw new Error(`Duplicate action type: ${fullType}`)
      }

      actionTypes[fullType] = true
    }

    return Object.assign(
      (payload: Payload, meta?: Meta) => {
        const action: Action<Payload> = {
          type: fullType,
          payload,
        }

        if (commonMeta || meta) {
          action.meta = Object.assign({}, commonMeta, meta)
        }

        if (isError && (typeof isError === 'boolean' || isError(payload))) {
          action.error = true
        }

        return action
      },
      {
        type: fullType,
        toString: () => fullType,
        match: (action: AnyAction): action is Action<Payload> =>
          action.type === fullType,
      },
    ) as ActionCreator<Payload>
  }

  function asyncActionCreators<Params, Result, Error>(
    type: string, commonMeta?: Meta,
  ): AsyncActionCreators<Params, Result, Error> {
    return {
      type: base + type,
      request: actionCreator<Params>(`${type}_REQUEST`, commonMeta, false),
      success: actionCreator<Success<Params, Result>>(
        `${type}_SUCCESS`, commonMeta, false,
      ),
      failure: actionCreator<Failure<Params, Error>>(
        `${type}_FAILURE`, commonMeta, true,
      ),
    }
  }

  return Object.assign(actionCreator, {async: asyncActionCreators})
}

export default actionCreatorFactory

export function bindAsyncAction<P, R>(
  actionCreators: AsyncActionCreators<P, R, any>,
  onSuccess?: (params: P, result: R) => Effect,
  onError?: (params: P, error: any) => Effect,
): {
  (worker: (params: P) => Promise<R> | SagaIterator):
    (params: P) => SagaIterator;

  <A1>(worker: (params: P, arg1: A1) => Promise<R> | SagaIterator):
    (params: P, arg1: A1) => SagaIterator;

  <A1, A2>(worker: (params: P, arg1: A1,
                    arg2: A2) => Promise<R> | SagaIterator):
    (params: P, arg1: A1, arg2: A2) => SagaIterator;

  <A1, A2, A3>(worker: (params: P, arg1: A1, arg2: A2, arg3: A3,
                        ...rest: any[]) => Promise<R> | SagaIterator):
    (params: P, arg1: A1, arg2: A2, arg3: A3, ...rest: any[]) => SagaIterator;
}

export function bindAsyncAction<P, R>(
  actionCreator: AsyncActionCreators<P, R, any>,
  onSuccess?: (params: P, result: R) => Effect,
  onError?: (params: P, error: any) => Effect,
) {
  return (
    worker: (params: P, ...args: any[]) => Promise<any> | SagaIterator,
  ) => {
    return function*(params: P, ...args: any[]): SagaIterator {
      try {
        const result = yield (call as any)(worker, params, ...args)
        yield put(actionCreator.success({ params, result }))
        if (onSuccess) {
          yield onSuccess(params, result)
        }
        return result
      } catch (error) {
        yield put(actionCreator.failure({ params, error: error.message }))
        if (onError) {
          yield onError(params, error)
        }
      } finally {
        if (yield cancelled()) {
          yield put(
            actionCreator.failure({ params, error: 'cancelled' }),
          )
        }
      }
    }
  }
}
