import React from 'react'
import { Logo } from 'components/logo'
import styles from './style.module.css'

export const Header = () => (
    <header className={styles.root}>
        <Logo />
    </header>
)
