import React from 'react'
import * as PropTypes from 'prop-types'
import styles from './style.module.css'

export const Layout = ({ children }) => (
    <div className={styles.root}>{children}</div>
)

Layout.propTypes = {
    children: PropTypes.node,
}
