import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

export class P extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <p>{this.props.children}</p>
        )
    }
}
