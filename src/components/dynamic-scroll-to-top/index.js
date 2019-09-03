import { useEffect } from 'react'
import * as PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const DynamicScrollToTop = ({ history, location }) => {

    const { action } = history
    const { hash } = location

    useEffect(() => {
        if (action === 'POP') {
            return
        }

        if (hash) {
            const element = document.querySelector(hash)

            if (element) {
                element.scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
        }
        else {
            window.scrollTo(0, 0)
        }
    })

    return null
}

DynamicScrollToTop.propTypes = {
    history: PropTypes.shape({
        action: PropTypes.string,
    }),
    location: PropTypes.shape({
        hash: PropTypes.string,
    }),
}

export const ScrollToTop = withRouter(DynamicScrollToTop)
