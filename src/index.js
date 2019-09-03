import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as PropTypes from 'prop-types'
import configureStore from './store'
import './index.css'
import {
    MainPageContainer,
    PostContainer,
    TagPageContainer,
} from 'containers'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderContainer from 'containers/header-container'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} >
            <HeaderContainer />
            <Switch>
                <Route exact path='/' component={MainPageContainer} />
                <Route path='/tags/:tag' component={TagPageContainer} />
                <Route component={PostContainer} />
                {/* <Route path='/about' component={About} />*/}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
