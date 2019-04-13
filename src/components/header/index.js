import React from 'react'
import { Link } from 'react-router-dom'

export function Header({ simpleAction }) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about me</Link>
            </li>
            <li>
                <Link to="/tag/in-a-nutshell">in a nutshell</Link>
            </li>
            <li>
                <Link to="/tag/javascript">javascript</Link>
            </li>
            <button onClick={simpleAction}>Test redux action</button>
        </ul>
    )
}
