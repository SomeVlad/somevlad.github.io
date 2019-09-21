import React, { Fragment } from 'react'
import { isString, isFunction } from 'lodash/fp'
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

const DEFAULT_TAG_NAME = 'span'

const tagToComponentLookup = {
    ...UI,
    Fragment,
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
        srcset,
    } = node

    // eslint-disable-next-line no-console
    if (!tagToComponentLookup[capitalize(tagName)]) console.warn(node)
    const Component = selectComponentByTagName(tagName) || selectComponentByTagName(DEFAULT_TAG_NAME)

    let contents

    if (!childNodes || childNodes.length === 0) {
        contents = textContent
    }
    else {
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
        ...srcset && { srcset },
    }

    return (
        <Component
            key={index}
            {...additionalParameters}>
            {contents}
        </Component>
    )
}

export const createReducer = (initialState, actionLookup = {}) => (state = initialState, action) => {
    if (!action || !isString(action.type)) {
        return state
    }

    const reducer = actionLookup[action.type]

    if (!isFunction(reducer)) {
        return state
    }

    return reducer(state, action)
}

/**
 * Returns random number within range
 * @param min
 * @param max
 * @returns {number}
 */
export const getRandomNumberWithinRange = ({ min = 0, max = 1 }) => Math.round(Math.random() * (max - min)) + min

export const formatDate = date => {
    const dateObject = new Date(date)

    return dateObject.toLocaleDateString()
}
