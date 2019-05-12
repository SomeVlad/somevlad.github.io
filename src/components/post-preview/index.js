import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { H1 } from 'ui'
import {
    renderNodeAsComponent
} from 'helpers'
import styles from './style.module.css'

const PostTitle = ({ heading, url }) => (
    <Link to={url}>
        <H1>{heading}</H1>
    </Link>
)

class PostPreview extends Component {
    render() {
        const { heading, contents, link } = this.props
        if (!contents) {
            return 'loading...'
        }

        const url = new URL(link).pathname

        return (
            <article key={heading} className={styles.article}>
                <PostTitle
                    heading={heading}
                    url={url} />
                {contents.map(renderNodeAsComponent)}
            </article>
        )
    }
}

export { PostPreview }
