import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getRandomNumberWithinRange } from 'helpers'
import styles from './style.module.css'

const LOGO_RERENDER_INTERVAL = 3000

const getAlternateLetters = () => `0${getRandomNumberWithinRange({ min: 1, max: 15 })}`.slice(-2)
const getTextTransform = () => ['capitalize', 'lowercase', 'uppercase'][getRandomNumberWithinRange({ max: 2 })]

export class Logo extends Component {
    state = {
        fontFeatureSettings: `'ss${getAlternateLetters()}' on`,
        textTransform: getTextTransform(),
        interval: null,
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => this.setState({
                fontFeatureSettings: `'ss${getAlternateLetters()}' on`,
                textTransform: getTextTransform(),
            }), LOGO_RERENDER_INTERVAL),
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    render() {
        const { fontFeatureSettings, textTransform } = this.state

        return (
            <Link to='/' className={styles.link}>
                <h1
                    className={styles.logo}
                    style={{ fontFeatureSettings, textTransform }}>
                    Vlad Samoylov
                </h1>
            </Link>
        )
    }
}
