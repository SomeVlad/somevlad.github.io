import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Tag = ({ id, name, slug }) => (
    <span
        key={id}
        className={styles.tag}>
        <Link
            to={`/tags/${slug}`}>
            {name}
        </Link>
    </span>
)

export const Tags = ({ tags }) => (
    <div>{tags.map(Tag)}</div>
)
