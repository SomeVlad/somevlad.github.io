import React, { Component } from 'react'
import styles from './style.module.css'
import { getRandomNumberWithinRange } from 'helpers'

const LOGO_RERENDER_INTERVAL = 5000

const getAlternateLetters = () => `0${getRandomNumberWithinRange({ min: 1, max: 18 })}`.slice(-2)
const getTextTransform = () => [ 'capitalize', 'lowercase', 'uppercase' ][getRandomNumberWithinRange({ max: 2 })]

export class Logo extends Component {
    state = {
        fontFeatureSettings: `'ss${getAlternateLetters()}' 1`,
        textTransform: getTextTransform(),
        interval: null,
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => this.setState({
                fontFeatureSettings: `'ss${getAlternateLetters()}' 1`,
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
            <h1
                className={styles.root}
                style={{ fontFeatureSettings, textTransform }}>
                Vlad Samoylov
            </h1>
        )
    }
}
