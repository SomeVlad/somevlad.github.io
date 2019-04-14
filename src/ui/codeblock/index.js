import React, { Component } from 'react'

class Pre extends Component {
    render() {
        return (
            <pre>{this.props.children}</pre>
        )
    }
}

class Code extends Component {
    render() {
        return (
            <code>{this.props.children}</code>
        )
    }
}

export { Pre, Code }
