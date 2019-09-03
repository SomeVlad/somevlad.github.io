import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import configureStore from './store'
import {
    MainPageContainer,
    PostContainer,
    TagPageContainer,
} from 'containers'
import { Layout } from 'components'
import * as serviceWorker from './serviceWorker'
import HeaderContainer from 'containers/header-container'
import './index.css'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <Layout>
                <HeaderContainer />
                <Switch>
                    <Route exact path='/' component={MainPageContainer} />
                    <Route path='/tags/:tag' component={TagPageContainer} />
                    <Route component={PostContainer} />
                    {/* <Route path='/about' component={About} />*/}
                </Switch>
            </Layout>
        </Router>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
