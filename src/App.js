import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import MailList from './components/MailList'
import { WelcomeDialog } from './components/WelcomeDialog'
import CustomTextInput from './components/CustomTextInput'
import logo from './logo.svg';
import './App.scss';

class App extends Component {
    state = {
        showModal: false
    }

    showModalToggle = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

  render() {
    return (
        <>
            <Header />
            <Menu showModalWindow={this.showModalToggle} />
            <MailList showModal={this.state.showModal}/>
            {/*<WelcomeDialog />*/}
            <CustomTextInput />
        </>
    );
  }
}

export default App;
