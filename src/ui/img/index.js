import React, { Component } from 'react'

export class Img extends Component {
    render() {
        const { src, alt, title, sizes, srcset } = this.props
        return (
            <img
                src={src}
                alt={alt}
                title={title}
                sizes={sizes}
                srcSet={srcset} />
        )
    }
}
