import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    const friendDetailStyle = {
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
        height: '300px',
        width: '400px',
        webkitBoxShadow: '10px 10px 40px #9E9E9E'
    }

    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [friendId])

    return (
        <div style= {friendDetailStyle}>
            <p>This is Friend Detail Components : {friendId}</p>
            <h2>{friend.name}</h2>
            <p>Email: {friend.email}</p>

        </div>
    );
};

export default FriendDetail;