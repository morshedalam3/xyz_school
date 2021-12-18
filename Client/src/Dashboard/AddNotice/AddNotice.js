import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import './AddNotice.css'


const AddNotice = () => {
    const [postData, setPostData] = useState({selectedFile: ''});
    const { register, handleSubmit, formState: { errors } } =useForm ();
  const onSubmit = data =>{
    const eventData={
        name:data.name,
        pdfURL:postData
    }
    const headers = new Headers();
        headers.append("content-type", "application/json");
        headers.append("responseType", "arraybuffer");

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(eventData),
          };
    fetch('https://rocky-bastion-51540.herokuapp.com/addPdf',options)
    .then(res=>{
        console.log('res data',res);
    })
  };


    return (
    <>
      <div className="main-div">
        <div className='addService'>
            <div className="container mt-5">
                <h1 className='text-center adService'>Add A New <span className='py-5 text-danger text-center'>Review</span></h1>
                <div className="row">
                    <div className="col-lg-3">
                        <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-div">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type='text' placeholder='Name' name='name'  {...register("name")} />
                                {/* <input type='file' placeholder='Upload Photo' /> */}
                                <div className="fileInput"><FileBase type="file" accept="application/pdf, application/vnd.ms-excel" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                                {errors.exampleRequired && <span>This field is required</span>}

                                <button type="submit"> Add Service </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    </div>
    
      </>
    );
};

export default AddNotice;