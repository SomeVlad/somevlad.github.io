import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'components'

const HeaderContainer  = () => <Header />

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(HeaderContainer)
