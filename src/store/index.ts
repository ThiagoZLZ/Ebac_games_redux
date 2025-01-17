import {
  combineReducers,
  configureStore as configStore,
  PreloadedState,
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function configureStore(PreloadedState?: PreloadedState<RootState>) {
  return configStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    PreloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type appStore = ReturnType<typeof configureStore>
