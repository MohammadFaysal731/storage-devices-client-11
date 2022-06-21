import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig.init';
const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/myitems?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])
    return (
        <div>
            <h1>My Items{items.length}</h1>

        </div>
    );
};

export default MyItems;