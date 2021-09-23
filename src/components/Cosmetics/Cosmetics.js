import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [ cosmetics, setCosmetics ] = useState( [] );

    useEffect( () => {
        fetch( './cosmetics.json' )
            .then( res => res.json() )
            .then( data => setCosmetics( data ) );

    }, [] );
    return (
        <div>
            <h2>Shop My Cosmetics!!!</h2>
            <div style={ { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', margin: '50px' } }>
                {
                    cosmetics.map( cosmetic => <Cosmetic
                        key={ cosmetic._id }
                        cosmetic={ cosmetic }>
                    </Cosmetic> )
                }
            </div>
        </div >
    );
};

export default Cosmetics;