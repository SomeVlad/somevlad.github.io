import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'components/header'

const HeaderContainer  = () => <Header />

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(HeaderContainer)
