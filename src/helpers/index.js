import React, { Fragment } from 'react'
import * as UI from 'ui'

export const getYoutubeVideoIdFromString = url => {
    if (!url || !url.replace) {
        return null
    }
    const stringsArray = url.replace(/([><])/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
    if (stringsArray[2]) {
        return stringsArray[2].split(/[^0-9a-z_-]/i)[0]
    }
    return stringsArray[0]
}

export const getYoutubeThumbnailImageUrl = id => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
export const getYoutubeVideoLink = id => `https://www.youtube.com/watch?v=${id}`

export const capitalize = string => {
    if (typeof string !== 'string' || string.length === 0) {
        return null
    }

    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export const getSlugFromPathname = pathname => {
    if (!pathname || typeof pathname !== 'string') {
        return null
    }

    return pathname.split('/').filter(Boolean).pop()
}

const DEFAULT_TAG_NAME = 'span'

const tagToComponentLookup = {
    ...UI,
    Fragment
}

const selectComponentByTagName = tagName => tagToComponentLookup[capitalize(tagName)]

export const renderNodeAsComponent = (node, index) => {
    const {
        childNodes,
        tagName = 'fragment',
        textContent,
        href,
        title,
        src,
        alt,
        allow,
        allowfullscreen,
        sizes,
        srcset
    } = node
    if (!tagToComponentLookup[capitalize(tagName)]) console.log(node)
    const Component = selectComponentByTagName(tagName) || selectComponentByTagName(DEFAULT_TAG_NAME)

    let contents
    if (!childNodes || childNodes.length === 0) {
        contents = textContent
    } else {
        contents = [...childNodes].map(renderNodeAsComponent)
    }

    const additionalParameters = {
        ...href && { href },
        ...title && { title },
        ...src && { src },
        ...alt && { alt },
        ...allow && { allow },
        ...allowfullscreen && { allowfullscreen },
        ...sizes && { sizes },
        ...srcset && { srcset }
    }

    return (
        <Component
            key={index}
            children={contents}
            {...additionalParameters} />
    )
}
