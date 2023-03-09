import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import settingsReducer from './slices/settings.slice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  settings: settingsReducer,
})

const persistedSettingReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedSettingReducer,
  middleware: (getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      // Ignore all actions that redux-persist has
      // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })),
})


export const persistedStore = persistStore(store)
