import React from 'react'
import styles from './style.module.css'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
    getYoutubeVideoIdFromString,
    getYoutubeThumbnailImageUrl,
    getYoutubeVideoLink,
} from 'helpers'
import { A, Img } from 'ui'

const cx = classNames.bind(styles)
const youtubePreviewLinkClassNames = cx('iframe', 'video-link')

const YoutubeVideoPreview = ({ id }) => (
    <A
        className={youtubePreviewLinkClassNames}
        href={getYoutubeVideoLink(id)}>
        <Img src={getYoutubeThumbnailImageUrl(id)}
            className={cx('iframe-image')}
            alt='youtube video'
            title='youtube video' />
    </A>
)

YoutubeVideoPreview.propTypes = {
    id: PropTypes.string,
}

export const Iframe = ({ src, title }) => {
    const youtubeVideoId = getYoutubeVideoIdFromString(src)

    return (
        <span className={cx('iframe-wrap')}>
            {youtubeVideoId ? (
                <YoutubeVideoPreview id={youtubeVideoId} />
            ) : (
                <iframe className={cx('iframe')}
                    src={src}
                    title={title}
                    loading='lazy' />
            )}
        </span>
    )
}

Iframe.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
}
