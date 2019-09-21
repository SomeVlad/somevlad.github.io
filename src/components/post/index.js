import React, { Component, Fragment } from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { TagsContainer } from 'containers'
import { H1 } from 'ui'
import {
    formatDate,
    renderNodeAsComponent,
} from 'helpers'
import { ScrollToTop } from 'components'
import styles from './style.module.css'

const cx = classNames.bind(styles)

const PostHeader = ({ slug, preview, children }) => {
    if (preview) {
        return (
            <Link to={`/posts/${slug}`} className={styles.link}>
                <H1>{children}</H1>
            </Link>
        )
    }

    return (
        <H1>{children}</H1>
    )
}

PostHeader.propTypes = {
    slug: PropTypes.string,
    preview: PropTypes.bool,
    children: PropTypes.node,
}

const PostFooter = ({ tags, date }) => (
    <footer className={styles.footer}>
        {tags && (
            <TagsContainer tagIds={tags} />
        )}
        {date && (
            <time
                className={styles.date}
                dateTime={date}>
                {formatDate(date)}
            </time>
        )}
    </footer>
)

PostFooter.propTypes = {
    tags: PropTypes.arrayOf(
        PropTypes.number
    ),
    date: PropTypes.string,
}

class Post extends Component {
    static propTypes = {
        heading: PropTypes.string,
        contents: PropTypes.array,
        slug: PropTypes.string,
        preview: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.number
        ),
        date: PropTypes.string,
    }

    render() {
        const {
            heading,
            contents,
            preview,
            slug,
            tags,
            date,
        } = this.props
        const articleClasses = cx('article', { preview })

        return (
            <Fragment>
                <article className={articleClasses}>
                    <PostHeader
                        slug={slug}
                        preview={preview}>
                        {heading}
                    </PostHeader>
                    {contents.map(renderNodeAsComponent)}
                    <PostFooter
                        tags={tags}
                        date={date} />
                </article>
                <ScrollToTop />
            </Fragment>
        )
    }
}

export { Post }
