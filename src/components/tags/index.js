import React, { Component, Fragment } from 'react'
import * as PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './style.module.css'

const Tag = ({ name, slug, count }) => (
    <Fragment>
        <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={`/tags/${slug}`}>
            {name}
        </NavLink>
        <sup>{count}</sup>
    </Fragment>
)

Tag.propTypes = {
    count: PropTypes.number,
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
                <ul className={styles.list}>
                    {tagIds.map(id => (
                        <li key={id} className={styles['list-item']}>
                            <Tag {...tags[id]} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
