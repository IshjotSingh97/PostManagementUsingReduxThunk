import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { postReducer } from './posts'
import { widgetReducer } from './widget'
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
    posts: postReducer,
    widget: widgetReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)