import React, { Component } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import MailList from '../components/MailList'
import { WelcomeDialog } from '../components/WelcomeDialog'
import CustomTextInput from '../components/CustomTextInput'
import logo from '../logo.svg';
import { Route, Switch } from 'react-router-dom';
import '../App.scss';
import MailPage from "./MailPage";

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
                <div className="container">
                    <div className="row nav__bar_top">
                        <Menu showModalWindow={this.showModalToggle}  switchFolder = {this.switchFolder}/>
                        <Switch>
                            <Route path="/mail/:id" component={MailPage}/>
                            <Route path="/" render={(props) => (
                                <MailList {...props} activeFolder={this.state.activeFolder} showModal={this.state.showModal}/>
                            )}/>
                        </Switch>
                    </div>
                </div>
                    {/*<WelcomeDialog />*/}
                {/*<CustomTextInput />*/}

            </>
        );
    }
}

export default Main;
