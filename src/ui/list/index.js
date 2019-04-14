import React, { Component } from 'react'

class Ul extends Component {
    render() {
        return (
            <ul>{this.props.children}</ul>
        )
    }
}

class Ol extends Component {
    render() {
        return (
            <ol>{this.props.children}</ol>
        )
    }
}

class Li extends Component {
    render() {
        return (
            <li>{this.props.children}</li>
        )
    }
}

export {
    Ul,
    Ol,
    Li
}
