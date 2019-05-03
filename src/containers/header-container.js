import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { getTags } from 'actions'
import { Header, Tags } from 'components'

class HeaderContainer extends Component {
    componentDidMount() {
        const { getTags } = this.props
        if (getTags) {
            getTags()
        }
    }

    render() {
        const { tags } = this.props
        return (
            <Fragment>
                <Header />
                <Tags tags={tags} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ tags }) => ({
    tags
})

const mapDispatchToProps = {
    getTags
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer)
