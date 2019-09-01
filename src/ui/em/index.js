import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Em extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <em>{this.props.children}</em>
        )
    }
}
