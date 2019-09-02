import React, { Component } from 'react'
import styles from './style.module.css'

const LOGO_RERENDER_INTERVAL = 5000

const getAlternateLetters = () => `0${(Math.floor(Math.random() * 17) + 1)}`.slice(-2)
const getTextTransform = () => [ 'capitalize', 'lowercase', 'uppercase' ][Math.floor(Math.random() * 3)]

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
