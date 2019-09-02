import React from 'react'
import styles from './style.module.css'
import PropTypes from 'prop-types'

const Pre = ({ children }) => (
    <pre className={styles.pre}>{children}</pre>
)

Pre.propTypes = {
    children: PropTypes.node,
}

const Code = ({ children }) => (
    <code>{children}</code>
)

Code.propTypes = {
    children: PropTypes.node,
}

export { Pre, Code }
