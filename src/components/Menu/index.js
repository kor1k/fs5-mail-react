import React, { Component } from 'react'
import NewMail from "../NewMail";
import MenuList from "../MenuList";
import './Menu.scss'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <NewMail show={this.props.showModalWindow} />
                <MenuList switchFolder = {this.props.switchFolder}/>
            </div>
        )
    }
}