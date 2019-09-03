import React, { Fragment } from 'react'
import * as PropTypes from 'prop-types'

export const A = ({ href, children, className }) => {
    const isInternal = new URL(href).hostname === window.location.hostname
    const target = isInternal ? '_self' : '_blank'
    const rel = isInternal ? null : 'noreferrer noopener'

    return (
        <Fragment>
            <a
                className={className}
                href={href}
                target={target}
                rel={rel}>
                {children}
            </a>
            <link rel='prefetch' href={href} />
        </Fragment>
    )
}

A.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
}
