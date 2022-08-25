import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>knock knock! who is there?</h2>
            <h5>{user ? user.displayName : 'jani na ke'}</h5>
        </div>
    );
};

export default Products;