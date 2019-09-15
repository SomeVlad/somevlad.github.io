import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import configureStore from './store'
import {
    MainPageContainer,
    PostContainer,
    TagsContainer,
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
                <TagsContainer />
                <Switch>
                    <Route exact path='/' component={MainPageContainer} />
                    <Route path='/tags/:tag' component={TagPageContainer} />
                    <Route path='/posts/:post' component={PostContainer} />
                </Switch>
            </Layout>
        </Router>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
