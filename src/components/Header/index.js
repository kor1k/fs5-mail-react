import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 gmail-logotype"><img width='130px' height='70px' src="https://imageog.flaticon.com/icons/png/512/281/281769.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt=""/></div>
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