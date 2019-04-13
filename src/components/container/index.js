import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from 'pages/homepage'
import { simpleAction } from 'actions/simpleAction'

class App extends Component {
    render() {
        const { simpleAction } = this.props
        return (
            <Router>
                <div>
                    <Header simpleAction={simpleAction} />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/tag" component={Tags} />
                </div>
            </Router>
        )
    }
}

function About() {
    return <h2>About</h2>
}

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>
}

function Tags({ match }) {
    return (
        <div>
            <h2>Tags</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/javascript`}>javascript</Link>
                </li>
                <li>
                    <Link to={`${match.url}/in-a-nutshell`}>in a nutshell</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a tag.</h3>}
            />
        </div>
    )
}

function Header({ simpleAction }) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about me</Link>
            </li>
            <li>
                <Link to="/tag/in-a-nutshell">in a nutshell</Link>
            </li>
            <li>
                <Link to="/tag/javascript">javascript</Link>
            </li>
            <button onClick={simpleAction}>Test redux action</button>
        </ul>
    )
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
