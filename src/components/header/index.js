import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from 'components'

export const Header = () => (
    <Fragment>
        <Link to='/'><Logo /></Link>
        <ul>
            <li>
                <Link to='/about'>about me</Link>
            </li>
        </ul>
    </Fragment>
)
