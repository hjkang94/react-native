import { createStore, compose, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import reducers from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
)

export const persistore = persistStore(store)
