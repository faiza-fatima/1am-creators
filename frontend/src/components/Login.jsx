import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
        };

        try {
            const res = await axios.post('/api/auth/login', user);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div>
                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => onChange(e)} required />
            </div>
            <div>
                <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => onChange(e)} required />
            </div>
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;
