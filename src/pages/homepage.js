import React, { Component } from 'react'
import { Header, Post } from 'components'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.data.map(Post)}
            </div>
        )
    }
}

export { Home }
