import React, { Component } from 'react'
import NewMail from "../NewMail";
import MenuList from "../MenuList";
import './Menu.scss'

export default class Menu extends Component {
    render() {
        return (
            <div className="col-4">
                <NewMail show={this.props.showModalWindow} />
                <MenuList switchFolder = {this.props.switchFolder}/>
            </div>
        )
    }
}