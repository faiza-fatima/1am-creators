import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
        };

        const backendUrl = import.meta.env.VITE_BACKEND_URL; // Access environment variable

        try {
            const res = await axios.post(`${backendUrl}/api/auth/signup`, newUser);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div>
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => onChange(e)} required />
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => onChange(e)} required />
            </div>
            <div>
                <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => onChange(e)} required />
            </div>
            <input type="submit" value="Signup" />
        </form>
    );
};

export default Signup;
