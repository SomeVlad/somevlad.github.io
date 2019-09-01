import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { MainPage } from 'components/main-page'
import { selectPosts } from 'selectors'

const mapStateToProps = state => {
    const posts = selectPosts(state)
    return { posts }
}

const mapDispatchToProps = {
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
