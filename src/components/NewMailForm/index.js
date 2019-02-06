import React, { Component } from 'react'

export default class NewMailForm extends Component{
    render(){
        return (<>
        <div style={{background: "#fff", border: "1px solid black"}}>
            <input type="text" placeholder="To..."/>
            <textarea placeholder="Your message..."></textarea>
            <button>Send</button>
        </div>
        </>)
    }
}