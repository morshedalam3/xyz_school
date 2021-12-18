import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';

import './AddGenTeacher.css'
const AddGenTeacher = () => {
    const [postData, setPostData] = useState({selectedFile: ''});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const teacherData = {
            name: data.name,
            designation: data.designation,
            email: data.email,
            phone: data.phone,
            selectedFile: postData
        }



        fetch('https://rocky-bastion-51540.herokuapp.com/addTeacher', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(teacherData)
        })
            .then(res => {
                console.log('res data', res);
            })
    };

    return (
        <div className="main-div">
        <div className='addService'>
            <div className="container mt-5">
                <h1 className='text-center adService'>Add A New <span className='py-5 text-danger text-center'>Teacher</span></h1>
                <div className="row">
                    <div className="col-lg-3">
                        <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-div">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type='text' placeholder='Name' name='name'  {...register("name")} />
                                <input type='text' placeholder='Designation' name='designation'  {...register("designation")} />
                                <input type='email' placeholder='Email' name='email'  {...register("email")} />
                                <input type='number' placeholder='Phone Number' name='phone'  {...register("phone")} />
                                <div className="fileInput"><FileBase type="file" accept="application/pdf, application/vnd.ms-excel" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                                {errors.exampleRequired && <span>This field is required</span>}

                                <button type="submit"> Add Teacher </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddGenTeacher;