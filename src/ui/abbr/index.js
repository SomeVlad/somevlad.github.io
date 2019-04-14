import React, { Component } from 'react'

export class Abbr extends Component {
    render() {
        const { children, title } = this.props
        return (
            <abbr title={title}>{children}</abbr>
        )
    }
}
