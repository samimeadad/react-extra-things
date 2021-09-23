//Use local storage as our database
const getDb = () => localStorage.getItem( 'shoppingCart' );
const updateDb = cart => {
    localStorage.setItem( 'shoppingCart', JSON.stringify( cart ) );
}

const addToDb = id => {
    const exists = getDb();
    let shoppingCart = {};
    if ( !exists ) {
        shoppingCart[ id ] = 1;
    }
    else {
        shoppingCart = JSON.parse( exists );
        if ( shoppingCart[ id ] ) {
            const newCount = shoppingCart[ id ] + 1;
            shoppingCart[ id ] = newCount;
        }
        else {
            shoppingCart[ id ] = 1;
        }
    }
    updateDb( shoppingCart );
}

const removeFromDb = id => {
    const exists = getDb();
    if ( !exists ) {

    }
    else {
        const shoppingCart = JSON.parse( exists );
        delete shoppingCart[ id ];
        updateDb( shoppingCart );
    }
}

export { addToDb, removeFromDb };