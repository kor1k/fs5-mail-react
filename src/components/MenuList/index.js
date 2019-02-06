import React, { Component } from 'react'

export default class MenuList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <a href="#">Inbox</a>
                </li>
                <li>
                    <a href="#">Drafts</a>
                </li>
                <li>
                    <a href="#">Send</a>
                </li>
                <li>
                    <a href="#">Trash</a>
                </li>
            </ul>
        )
    }
}