import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { carouselReducer } from '@/store/carousel/carousel.slice'
import { cartReducer } from '@/store/cart/cart.slice'

const persistConfig = {
	key: 'coffee-shop',
	storage,
	whiteList: ['cart']
}

const rootReducer = combineReducers({
	cart: cartReducer,
	carousel: carouselReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
