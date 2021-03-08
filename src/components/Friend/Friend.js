import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url);
    }

    const friendStyle = {
        border: '2px solid green',
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <div>
                <p>Id: <Link to={`/friend/${id}`}>Show detail {id}</Link></p>
                <button onClick={() => handleClick(id)}>Click Me</button>
            </div>
        </div>
    );
};

export default Friend;