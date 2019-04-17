import React, { Component, Fragment } from 'react'
import styles from './style.module.css'
import * as UI from 'ui'

const DEFAULT_TAG_NAME = 'span'

const parser = new DOMParser()

const tagToComponentLookup = {
    ...UI,
    Fragment
}

const pascalize = string => string[0].toUpperCase() + string.slice(1).toLowerCase()
const findComponentByTagName = tagName => tagToComponentLookup[pascalize(tagName)]

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
        if (!tagToComponentLookup[pascalize(tagName)]) console.log(this.props.node)
        const Component = findComponentByTagName(tagName) || findComponentByTagName(DEFAULT_TAG_NAME)
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

function Post({ content, title }) {
    const heading = title.rendered
    const __html = content.rendered
    const postContents = [
        ...parser
            .parseFromString(__html, 'text/html')
            .body
            .childNodes
    ]
    return (
        <article key={heading} className={styles.article}>
            <h1>{heading}</h1>
            {postContents.map((node, index) => (
                <Contents key={index} node={node} />
            ))}
        </article>
    )
}

export { Post }
