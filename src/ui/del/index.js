import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Del extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <del>{this.props.children}</del>
        )
    }
}
