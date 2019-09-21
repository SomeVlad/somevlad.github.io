import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class H1 extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <h1>{this.props.children}</h1>
        )
    }
}

class H2 extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <h2>{this.props.children}</h2>
        )
    }
}

class H3 extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <h3>{this.props.children}</h3>
        )
    }
}

class H4 extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <h4>{this.props.children}</h4>
        )
    }
}

class H5 extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <h5>{this.props.children}</h5>
        )
    }
}

class H6 extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <h6>{this.props.children}</h6>
        )
    }
}

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
}
