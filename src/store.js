import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

const enhancers = []
const middleware = [
    thunk
]

const { __REDUX_DEVTOOLS_EXTENSION__ } = window

if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__())
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        composedEnhancers
    )
}
