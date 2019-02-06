import React, { Component } from 'react'

export default class CustomTextInput extends Component {
    focus = () => {
        // Установка фокуса на поле текстового ввода (input) с явным использованием
        // исходного API DOM
        this.textInput.focus();
        this.textInput.value = 'new'
    }
    render() {
        // Использование обратного вызова `ref` для сохранения ссылки на поле
        // текстового ввода (input) как элемента DOM в this.textInput.
        return (
            <div>
                <input type="text"
                       ref={(elem) => { this.textInput = elem; }} />
                <input type="button" value="Focus the text input" onClick={this.focus} />
            </div>
        );
    }
}