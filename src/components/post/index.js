import React from 'react'
import styles from './style.module.css'

function Post({ content, title }) {
    const heading = title.rendered
    const __html = content.rendered
    return (
        <article key={heading} className={styles.root}>
            <h1>{heading}</h1>
            <div dangerouslySetInnerHTML={{ __html }} />
        </article>
    )
}

export { Post }
