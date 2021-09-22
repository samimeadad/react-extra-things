import React from 'react';

const Cosmetic = ( props ) => {
    console.log( props.cosmetic );
    const { name, price, balance } = props.cosmetic;
    return (
        <div>
            <h2>Name: { name }</h2>
            <h2>Price: { price }</h2>
            <h2>Balance: { balance }</h2>
        </div>
    );
};

export default Cosmetic;