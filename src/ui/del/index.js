import React, { Component } from 'react'

export class Del extends Component {
    render() {
        return (
            <del>{this.props.children}</del>
        )
    }
}
