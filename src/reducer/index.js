import { combineReducers } from "redux";
import userReducer from './user'
import RajaOngkirReducer from './rajaongkir'
import AuthReducer from './auth'
import ProfileReducer from './profile'
import BooksReducer from './books'
import CategoryReducer from './category'

const rootReducer = combineReducers({
    userReducer,
    RajaOngkirReducer,
    AuthReducer,
    ProfileReducer,
    BooksReducer,
    CategoryReducer
})

export default rootReducer