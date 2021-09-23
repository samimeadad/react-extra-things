import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = ( props ) => {
    const { _id, name, gender, balance } = props.cosmetic;

    const handlePurchase = id => {
        addToDb( id );
    }

    const handleRemove = id => {
        removeFromDb( id );
    }

    return (
        <div style={ {
            backgroundColor: 'floralwhite', width: '50%', margin: 'auto', marginTop: '20px', border: '3px solid blue', padding: '20px', borderRadius: '20px'
        } }>
            <h2>Id: { _id } </h2>
            <h2>Name: { name }</h2>
            <p>Gender: { gender }</p>
            <h4>Balance: { balance }</h4>
            <button onClick={ () => handlePurchase( _id ) } style={ { backgroundColor: 'salmon', padding: '10px', borderRadius: '5px', color: 'white' } }>Purchase</button>
            <button onClick={ () => handleRemove( _id ) } style={ { backgroundColor: 'salmon', padding: '10px', marginLeft: '5px', borderRadius: '5px', color: 'white' } }>Remove</button>
        </div >
    );
};

export default Cosmetic;