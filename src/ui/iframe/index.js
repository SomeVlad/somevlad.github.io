import React, { Component } from 'react'

export class Iframe extends Component {
    render() {
        const { src, title } = this.props
        return (
            <iframe src={src} title={title} />
        )
    }
}
