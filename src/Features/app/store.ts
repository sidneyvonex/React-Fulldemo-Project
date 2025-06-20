import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../api/userApi'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import authSlice from '../auth/authSlice'
import authReducer from '../auth/authSlice'


//Create a Persist congig for auth Slice 

const authPersistConfig ={
  key:'auth',
  storage,
  whitelist:['user','token','isAuthenticated','userType']
}

//Create a persisted Reducer for the auth slice

const persistAuthReducer = persistReducer(authPersistConfig,authReducer)

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    //use the persisted Reducer in store 
    auth: persistAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware),
})


//Export persisted Store
export const persistor = persistStore(store)
// Export types for use throughout your app
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
