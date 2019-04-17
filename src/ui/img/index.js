import React from 'react'
import styles from './style.module.css'

export const Img = ({ src, alt, title, sizes, srcset }) => (
    <img
        className={styles.img}
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        srcSet={srcset} />
)
