import React from 'react'
import styles from './style.module.css'
import classNames from 'classnames/bind'
import {
    getYoutubeVideoIdFromString,
    getYoutubeThumbnailImageUrl,
    getYoutubeVideoLink
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

export const Iframe = props => {
    const { src, title } = props
    const youtubeVideoId = getYoutubeVideoIdFromString(src)
    return (
        <div className={cx('iframe-wrap')}>
            {youtubeVideoId ? (
                <YoutubeVideoPreview id={youtubeVideoId} />
            ) : (
                <iframe className={cx('iframe')}
                        src={src}
                        title={title} />
            )}
        </div>
    )
}
