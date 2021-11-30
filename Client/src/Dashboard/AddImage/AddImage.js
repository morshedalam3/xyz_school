import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddImage.css'
const AddImage = () => {
    const [imageURL,setImageURL]=useState(null);
    const { register, handleSubmit, watch, formState: { errors } } =useForm ();
  const onSubmit = data =>{
    const eventData={
        category: data.category,
        selectedFile:imageURL

    }
    

  
    fetch('http://localhost:8000/addImage',{
     method:'POST',
     headers:{
      'content-type' : 'application/json'
     },
     body:JSON.stringify(eventData)
    })
    .then(res=>res.json())
    .then(data=>setImageURL(data))
  };

  const handleImageUpload=event=>{
      console.log(event.target.files[0]);
      const imageData=new FormData()
      imageData.set('key','6bf0cd718179276f282785bb56c7be39');
      imageData.append('image',event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', 
      imageData
      )
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

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
               <input   type='file'  placeholder='Upload Photo'   onChange={handleImageUpload}  />
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