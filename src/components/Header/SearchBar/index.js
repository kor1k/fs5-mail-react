import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <>
                <input type="text" className="search-inp" />
                <button>Search</button>
            </>
        )
    }
}