import {createStore, combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import { UserSLice } from './slice/userSlice'
import { markSLice } from './slice/marksSlice'

const persistedReducer = {
    key: 'root',
    storage
}

const reducersConfigure = combineReducers({
    user: UserSLice,
    marks: markSLice
})

const store = createStore(persistReducer(persistedReducer, reducersConfigure))
const persistor = persistStore(store)

export {store, persistor}