import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div>Logo</div>
                <div><SearchBar /></div>
                <div>User menu</div>
            </div>
        )
    }
}