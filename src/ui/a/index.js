import React, { Component } from 'react'

export class A extends Component {
    render() {
        const { href, children } = this.props
        return (
            <a href={href}>{children}</a>
        )
    }
}
