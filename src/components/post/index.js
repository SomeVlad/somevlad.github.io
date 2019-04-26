import React, { Component, Fragment } from 'react'
import styles from './style.module.css'
import * as UI from 'ui'
import { capitalize } from 'helpers'

const DEFAULT_TAG_NAME = 'span'

const tagToComponentLookup = {
    ...UI,
    Fragment
}

const selectComponentByTagName = tagName => tagToComponentLookup[capitalize(tagName)]

class Contents extends Component {
    render() {
        const {
            childNodes,
            tagName = 'fragment',
            textContent,
            href,
            title,
            src,
            alt,
            allow,
            allowfullscreen,
            sizes,
            srcset
        } = this.props.node
        if (!tagToComponentLookup[capitalize(tagName)]) console.log(this.props.node)
        const Component = selectComponentByTagName(tagName) || selectComponentByTagName(DEFAULT_TAG_NAME)

        let contents
        if (!childNodes || childNodes.length === 0) {
            contents = textContent
        } else {
            contents = [...childNodes].map((node, index) => <Contents key={index} node={node} />)
        }

        const additionalParameters = {
            ...href && { href },
            ...title && { title },
            ...src && { src },
            ...alt && { alt },
            ...allow && { allow },
            ...allowfullscreen && { allowfullscreen },
            ...sizes && { sizes },
            ...srcset && { srcset }
        }

        return (
            <Component children={contents} {...additionalParameters} />
        )
    }
}

const Post = ({ heading, contents }) => (
    <article key={heading} className={styles.article}>
        <h1>{heading}</h1>
        {contents.map((node, index) => (
            <Contents key={index} node={node} />
        ))}
    </article>
)

export { Post }
