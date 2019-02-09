import React, { Component } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import MailList from '../components/MailList'
import { WelcomeDialog } from '../components/WelcomeDialog'
import CustomTextInput from '../components/CustomTextInput'
import logo from '../logo.svg';
import '../App.scss';

class Main extends Component {
    state = {
        showModal: false,
        activeFolder: 'inbox',
    };

    showModalToggle = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    switchFolder = (folder) => {
        this.setState({
            activeFolder: folder,
        });
    };

    render() {
        return (
            <>
                <Header />
                <Menu showModalWindow={this.showModalToggle}  switchFolder = {this.switchFolder}/>
                <MailList activeFolder={this.state.activeFolder} showModal={this.state.showModal}/>
                {/*<WelcomeDialog />*/}
                <CustomTextInput />
            </>
        );
    }
}

export default Main;
