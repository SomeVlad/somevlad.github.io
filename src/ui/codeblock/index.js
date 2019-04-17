import React from 'react'
import styles from './style.module.css'

const Pre = ({ children }) => (
    <pre className={styles.pre}>{children}</pre>
)

const Code = ({ children }) => (
    <code>{children}</code>
)

export { Pre, Code }
