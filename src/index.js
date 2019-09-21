import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPageContainer from 'containers/main-page-container'
import PostContainer from 'containers/post-container'
import TagsContainer from 'containers/tags-container'
import TagPageContainer from 'containers/tag-page-container'
import HeaderContainer from 'containers/header-container'
import { Layout } from 'components/layout'
import configureStore from './store'
import * as serviceWorker from './serviceWorker'
import './index.css'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
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
