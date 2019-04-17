import React from 'react'
import styles from './style.module.css'

export const Iframe = ({ src, title }) => (
    <div className={styles['iframe-wrap']}>
        <iframe className={styles.iframe}
                src={src}
                title={title} />
    </div>
)
