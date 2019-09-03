import React, { Component, Fragment } from 'react'
import * as PropTypes from 'prop-types'
import { H1 } from 'ui'
import {
    renderNodeAsComponent,
} from 'helpers'
import styles from './style.module.css'
import { ScrollToTop } from '../dynamic-scroll-to-top'

class Post extends Component {
    static propTypes = {
        heading: PropTypes.string,
        contents: PropTypes.array,
    }

    render() {
        const { heading, contents } = this.props

        return (
            <Fragment>
                <article className={styles.article}>
                    <H1>{heading}</H1>
                    {contents.map(renderNodeAsComponent)}
                </article>
                <ScrollToTop />
            </Fragment>
        )
    }
}

export { Post }
