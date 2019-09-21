import React, { Component, Fragment } from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { H1 } from 'ui'
import {
    renderNodeAsComponent,
} from 'helpers'
import { ScrollToTop } from 'components'
import styles from './style.module.css'

const cx = classNames.bind(styles)

class Post extends Component {
    static propTypes = {
        heading: PropTypes.string,
        contents: PropTypes.array,
        slug: PropTypes.string,
        preview: PropTypes.bool,
    }

    render() {
        const { heading, contents, preview, slug } = this.props
        const articleClasses = cx('article', { preview })
        const postHeading = preview ? (
            <Link to={`/posts/${slug}`} className={styles.link}>
                <H1>{heading}</H1>
            </Link>
        ) : (
            <H1>{heading}</H1>
        )

        return (
            <Fragment>
                <article className={articleClasses}>
                    {postHeading}
                    {contents.map(renderNodeAsComponent)}
                </article>
                <ScrollToTop />
            </Fragment>
        )
    }
}

export { Post }
