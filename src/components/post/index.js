import React from 'react'
import styles from './style.module.css'

function Post({ content, title }) {
    const html = content.rendered
    const heading = title.rendered
    return (
        <article key={heading} className={styles.root}>
            <h1>{heading}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    )
}

export { Post }
