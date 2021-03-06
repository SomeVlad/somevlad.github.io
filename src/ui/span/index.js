import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

export class Span extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <span>{this.props.children}</span>
        )
    }
}
