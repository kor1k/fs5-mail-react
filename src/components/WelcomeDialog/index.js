import React from 'react'
import { FancyBorder } from '../FancyBorder'

export const WelcomeDialog = (props) => {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">
                <b>Welcome</b>
            </h1>
            <p className="dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}