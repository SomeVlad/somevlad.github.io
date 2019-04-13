import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css'
import { MainPageContainer } from 'containers'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={MainPageContainer} />
            {/*<Route path="/about" component={About} />*/}
            {/*<Route path="/tag" component={Tags} />*/}
        </Router>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
