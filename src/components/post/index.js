import React, { Component, Fragment } from 'react'
import styles from './style.module.css'
import * as UI from 'ui'

const parser = new DOMParser()

const tagToComponentLookup = {
    ...UI,
    Text: Fragment
}

const pascalize = string => string[0].toUpperCase() + string.slice(1).toLowerCase()

class Contents extends Component {
    render() {
        const {
            childNodes,
            tagName = 'text',
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
        const Component = tagToComponentLookup[pascalize(tagName)] || tagToComponentLookup[pascalize('span')]
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
        <article key={heading} className={styles.root}>
            <h1>{heading}</h1>
            {postContents.map((node, index) => (
                <Contents key={index} node={node} />
            ))}
        </article>
    )
}

export { Post }
