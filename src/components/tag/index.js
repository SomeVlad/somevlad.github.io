import React, { Component } from 'react'

class Tag extends Component {
    render() {
        return (
            <article>
                {JSON.stringify(this.props)}
            </article>
        )
    }
}

export { Tag }
