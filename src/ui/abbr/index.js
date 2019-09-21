import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

export class Abbr extends Component {
    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string,
    }

    render() {
        const { children, title } = this.props

        return (
            <abbr title={title}>{children}</abbr>
        )
    }
}
