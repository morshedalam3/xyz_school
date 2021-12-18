import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Share/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Review.css'


const Reviews = () => {
    const [imageURL,setImageURL]=useState(null);
    const { register, handleSubmit, formState: { errors } } =useForm ();
  const onSubmit = data =>{
    const eventData={
        name:data.name,
        companyName:data.companyName,
        imageURL:imageURL
    }
    

  
    fetch('https://glacial-tundra-14316.herokuapp.com/addReview',{
     method:'POST',
     headers:{
      'content-type' : 'application/json'
     },
     body:JSON.stringify(eventData)
    })
    .then(res=>{
        console.log('res data',res);
    })
  };

  const handleImageUpload=event=>{
      console.log(event.target.files[0]);
      const imageData=new FormData()
      imageData.set('key','3b8fa16325c0baa1794c79a7349a090d');
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
    <>
      <div className="main-div">
                    <Header/>
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
                                <input type='number' placeholder='price' name='price'  {...register("price")} />
                                <input type='file' placeholder='Upload Photo' onChange={handleImageUpload} />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <button type="submit"> Add Service </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
           <Footer/>
    </div>
    {/* <Header/>
      <div className="main-div">
        
      <div className="review-banner">
          <div className='container mt-5 '>
             <h3 className='py-5 text-center text-light'>Send Your <span className='text-danger'>Review</span></h3>
         <div className="row">
             <div className="col-lg-3">
                 <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
             </div>
             <div className="col-lg-6">
              <div className="form-div">
              <form onSubmit={handleSubmit(onSubmit)}>
       <input   type='text'  placeholder ='Name'      name='name'     {...register("name")} />
       <input   type="text" placeholder='Your Company Name'         name='companyName'       {...register("companyName", { required: true })} />
       <input   type='file'  placeholder='Upload Photo'   onChange={handleImageUpload}  />
       {errors.exampleRequired && <span>This field is required</span>}
       
       <button type="submit"> Send Review </button>
     </form>
              </div>
 
             </div>
             <div className="col-lg-3"></div>
         </div>
         </div>
         </div>
         <Footer></Footer>
      </div> */}
      </>
    );
};

export default Reviews;