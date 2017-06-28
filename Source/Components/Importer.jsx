import React from 'react'

export default class Importer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: "" }
    }
    render() {
        return (
            <div>
                <button onClick={ this.onClick.bind(this) }>What is the answer to importing dynamic modules</button>
                <span>{ this.state.text }</span>
            </div>)
    }

    onClick() {
        import('../DynamicModule')
            .then(module => {
                this.setState({ text: module.default.message })
            })
    }
}