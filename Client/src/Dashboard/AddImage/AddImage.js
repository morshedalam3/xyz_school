import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import './AddImage.css'
const AddImage = () => {
    const [postData, setPostData] = useState({selectedFile: ''});
    const { register, handleSubmit, formState: { errors } } =useForm ();
  const onSubmit = data =>{
    const eventData={
        category: data.category,
        selectedFile:postData
    }
    

  
    fetch('https://rocky-bastion-51540.herokuapp.com/addImage',{
     method:'POST',
     headers:{
      'content-type' : 'application/json'
     },
     body:JSON.stringify(eventData)
    })
  };

    return (
        <div className="main-div">
         <div className="blog-banner">
           
         <div className='container py-5'>
        
        <div className="row mt-5">
            <div className="col-lg-3">
                <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
            </div>
            <div className="col-lg-6">
             <div className="form-div">
             <form onSubmit={handleSubmit(onSubmit)}>
               <input type='text' placeholder='Category' name='category'  {...register("category")} />
               <div className="fileInput"><FileBase type="file" accept="application/pdf, application/vnd.ms-excel" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
               {errors.exampleRequired && <span>This field is required</span>}
      
      <button type="submit"> Add New Image </button>
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

export default AddImage;