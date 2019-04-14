import React, { Component } from 'react'

export class Strong extends Component {
    render() {
        return (
            <strong>{this.props.children}</strong>
        )
    }
}
