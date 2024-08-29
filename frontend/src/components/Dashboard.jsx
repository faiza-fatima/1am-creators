import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const config = {
                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                },
            };

            try {
                const res = await axios.get('/api/auth/user', config);
                setUser(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            {user ? (
                <h1>Welcome, {user.name}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
