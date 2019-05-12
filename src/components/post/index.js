import React, { Component } from 'react'
import { H1 } from 'ui'
import {
    renderNodeAsComponent
} from 'helpers'
import styles from './style.module.css'

class Post extends Component {
    render() {
        const { heading, contents } = this.props
        if (!contents) {
            return 'loading...'
        }

        return (
            <article key={heading} className={styles.article}>
                <H1>{heading}</H1>
                {contents.map(renderNodeAsComponent)}
            </article>
        )
    }
}

export { Post }
