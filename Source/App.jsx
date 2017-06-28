import React from 'react'
import Title from './Components/Title'
import Importer from './Components/Importer'
import './App.css'

export default class App extends React.Component {
    render() {
        return <div><Title /><Importer /></div>
    }
}