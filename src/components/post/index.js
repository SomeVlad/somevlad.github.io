import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { H1 } from 'ui'
import {
    renderNodeAsComponent,
} from 'helpers'
import styles from './style.module.css'

class Post extends Component {
    static propTypes = {
        heading: PropTypes.string,
        contents: PropTypes.array,
    }

    render() {
        const { heading, contents } = this.props

        if (!contents) {
            return 'loading...'
        }

        return (
            <article className={styles.article}>
                <H1>{heading}</H1>
                {contents.map(renderNodeAsComponent)}
            </article>
        )
    }
}

export { Post }
