import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({ id, name, slug }) => (
    <span key={id}>
        <Link
            to={`/tags/${slug}`}>
            {name}
        </Link>
        {' '}
    </span>
)

export const Tags = ({ tags }) => (
    <div>{tags.map(Tag)}</div>
)
