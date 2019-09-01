import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Strong extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <strong>{this.props.children}</strong>
        )
    }
}
