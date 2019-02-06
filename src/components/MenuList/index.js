import React, { Component } from 'react'

export default class MenuList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <span onClick={() => {this.props.switchFolder('inbox')}}>Inbox</span>
                </li>
                <li>
                    <span onClick={() => {this.props.switchFolder('drafts')}}>Drafts</span>
                </li>
                <li>
                    <span onClick={() => {this.props.switchFolder('send')}}>Send</span>
                </li>
                <li>
                    <span onClick={() => {this.props.switchFolder('trash')}}>Trash</span>
                </li>
            </ul>
        )
    }
}