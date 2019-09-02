import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export const Img = ({ src, alt, title, sizes, srcset, className }) => {
    const imageClassNames = classNames(className, styles.img)

    return (
        <img
            className={imageClassNames}
            src={src}
            alt={alt}
            title={title}
            sizes={sizes}
            srcSet={srcset}
            loading='lazy' /* https://addyosmani.com/blog/lazy-loading/ */
        />
    )
}

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    sizes: PropTypes.string,
    srcset: PropTypes.string,
    className: PropTypes.string,
}
