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
