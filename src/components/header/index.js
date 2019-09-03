import React from 'react'
import { Logo } from 'components'
import styles from './style.module.css'

export const Header = () => (
    <header className={styles.root}>
        <Logo />
    </header>
)
