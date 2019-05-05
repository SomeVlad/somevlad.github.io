import React, { Component } from 'react'
import styles from './style.module.css'

const getAlternateLetters = () => `0${(Math.floor(Math.random() * 17) + 1)}`.slice(-2)
const getTextTransform = () => ['capitalize', 'lowercase', 'uppercase'][Math.floor(Math.random() * 3)]

export class Logo extends Component {
    state = {
        fontFeatureSettings: `'ss${getAlternateLetters()}' 1`,
        textTransform: getTextTransform()
    }

    componentDidMount() {
        setInterval(() => this.setState({
            fontFeatureSettings: `'ss${getAlternateLetters()}' 1`,
            textTransform: getTextTransform()
        }), 5000)
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
