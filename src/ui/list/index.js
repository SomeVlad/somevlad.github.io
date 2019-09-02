import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Ul extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <ul>{this.props.children}</ul>
        )
    }
}

class Ol extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <ol>{this.props.children}</ol>
        )
    }
}

class Li extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <li>{this.props.children}</li>
        )
    }
}

export {
    Ul,
    Ol,
    Li,
}
