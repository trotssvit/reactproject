import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return ( < div className = "app" >
        <
        h1 > User Data: < /h1> <
        div className = "user-list" > {
            users.map((user) => ( <
                div className = "user"
                key = { user.id } >
                <
                h2 > { user.name } < /h2> <
                p > Email: { user.email } <
                /p> <
                p > Phone: { user.phone } < /p>  <
                p > Website: { user.website } < /p> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
}

export default App;