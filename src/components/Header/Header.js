import React from 'react'
import './header.scss'

const Header = ({appTitle}) => {
    return(
        <header className="App-header">
            <h2>{appTitle}</h2>
        </header>
    )
}

export default Header
