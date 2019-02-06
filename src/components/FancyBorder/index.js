import React from 'react'

export const FancyBorder = (props) => {
    const { children, color } = props;
    console.log('children:', children)
    return (
        <div className={'fancyBorder fancyBorder-' + color}>
            {children}
        </div>
    );
}