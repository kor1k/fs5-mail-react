import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchVal: ''
    }

    chgSearch = (event) => {
        console.log('Chg value')
        this.setState({
            searchVal: event.target.value
        })
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    className="search-inp"
                    value={this.state.searchVal}
                    onChange={this.chgSearch}
                />
                <button className="nav_top_search_button">Search</button>
            </>
        )
    }
}
