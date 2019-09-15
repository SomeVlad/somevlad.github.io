import {
    getYoutubeVideoIdFromString,
    capitalize,
} from '.'

describe('getYoutubeVideoIdFromString', () => {
    const validStrings = [
        'http://youtube.googleapis.com/v/BGL22PTIOAM?version=3',
        'https://www.youtube.com/watch?feature=g-vrec&v=BGL22PTIOAM',
        'http://www.youtube.com/watch?feature=player_embedded&v=BGL22PTIOAM#',
        'http://youtu.be/BGL22PTIOAM',
        'http://www.youtube.com/watch?v=BGL22PTIOAM',
        '<iframe width="420" height="315" src="http://www.youtube.com/embed/BGL22PTIOAM" allowfullscreen></iframe>',
        '<object width="420" height="315"><param name="movie" value="http://www.youtube-nocookie.com/v/BGL22PTIOAM?version=3&amp,hl=en_US" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><embed src="http://www.youtube-nocookie.com/v/Ab25nviakcw?version=3&amp,hl=en_US" type="application/x-shockwave-flash" width="420" height="315" allowscriptaccess="always" allowfullscreen="true" /></object>',
        'http://i1.ytimg.com/vi/BGL22PTIOAM/default.jpg',
        'https://www.youtube.com/watch?v=BGL22PTIOAM&feature=g-all-xit',
        'BGL22PTIOAM',
    ]

    it('returns valid youtube video id from string', () => {
        validStrings.forEach(string => expect(getYoutubeVideoIdFromString(string))
            .toEqual('BGL22PTIOAM'))
    }
    )

    it('returns null if has invalid input', () => {
        expect(getYoutubeVideoIdFromString(null)).toEqual(null)
        expect(getYoutubeVideoIdFromString(NaN)).toEqual(null)
        expect(getYoutubeVideoIdFromString(0)).toEqual(null)
        expect(getYoutubeVideoIdFromString('')).toEqual(null)
        expect(getYoutubeVideoIdFromString(123)).toEqual(null)
        expect(getYoutubeVideoIdFromString()).toEqual(null)
    })
})

describe('capitalize', () => {
    it('returns capitalized string', () => {
        expect(capitalize('a')).toEqual('A')
        expect(capitalize('a b')).toEqual('A b')
        expect(capitalize(' ')).toEqual(' ')
        expect(capitalize('A A')).toEqual('A a')
    }
    )

    it('returns null if has invalid input', () => {
        expect(capitalize(null)).toEqual(null)
        expect(capitalize(NaN)).toEqual(null)
        expect(capitalize(0)).toEqual(null)
        expect(capitalize('')).toEqual(null)
        expect(capitalize(123)).toEqual(null)
        expect(capitalize()).toEqual(null)
    })
})

