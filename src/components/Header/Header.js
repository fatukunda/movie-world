import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'

const Header = ({appTitle}) => {
    return(
        <header className="App-header">
            <h2>{appTitle}</h2>
        </header>
    )
}

Header.propTypes = {
    appTitle: PropTypes.string
}

export default Header
