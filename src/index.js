import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css'
import {
    MainPageContainer,
    PostContainer
} from 'containers'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={MainPageContainer} />
                <Route component={PostContainer} />
                {/*<Route path="/about" component={About} />*/}
                {/*<Route path="/tag" component={Tags} />*/}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
