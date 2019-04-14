import React, { Component } from 'react'

export class Figure extends Component {
    render() {
        return (
            <figure>{this.props.children}</figure>
        )
    }
}
