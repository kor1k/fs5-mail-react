import React, { Component } from 'react'

export default class NewMail extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.show}>New mail</button>
            </>
        )
    }
}