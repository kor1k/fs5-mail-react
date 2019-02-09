import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">Logo</div>
                    <div className="col-4"><SearchBar /></div>
                    <div className="col-4">
                        <NavLink to="/" activeClassName="active">Mail</NavLink>
                        <NavLink to="/contacts" activeClassName="active">Contacts</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}