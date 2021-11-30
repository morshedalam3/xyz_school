import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MakeAdmin.css'
const MakeAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('https://rocky-bastion-51540.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <div className='makeAdminBanner'>
            <div className="container mt-5">
                    <h1 className=' adService'>Add A New <span className='py-5 text-danger text-center'>Admin</span></h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-div">
                            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
                            </div>

                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    
                </div>
            </div>
    );
};

export default MakeAdmin;