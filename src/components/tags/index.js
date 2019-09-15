import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Tag = ({ id, name, slug, count }) => (
    <span key={id}>
        <Link
            to={`/tags/${slug}`}>
            {name}
        </Link>
        <sup>{count}</sup>
        {' '}
    </span>
)

Tag.propTypes = {
    count: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
}

export class Tags extends Component {
    static propTypes = {
        tags: PropTypes.objectOf(
            PropTypes.shape({
                count: PropTypes.number,
                id: PropTypes.number,
                name: PropTypes.string,
                slug: PropTypes.string,
            })
        ),
        tagIds: PropTypes.arrayOf(PropTypes.number),
        getTags: PropTypes.func,
    }

    componentDidMount() {
        this.props.getTags()
    }

    render() {
        const { tags, tagIds } = this.props

        return (
            <div className={styles.root}>
                {tagIds.map(id => <Tag key={id} {...tags[id]} />)}
            </div>
        )
    }
}
