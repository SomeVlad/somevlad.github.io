import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

export class Figure extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <figure>{this.props.children}</figure>
        )
    }
}
