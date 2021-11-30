import React, { useEffect, useState } from 'react';
import ImgItems from '../ImgItems/ImgItems';
import './GalleryImg.css'

const GalleryImg = () => {

    const[images,setImages]=useState([])
     useEffect(()=>{
        fetch('https://rocky-bastion-51540.herokuapp.com/getImage')
        .then(res=>res.json())
        .then(data=>setImages(data))
     },[0])

    return (
      <section className='background-for-blog-section'>
          <div className="the-service-hading text-center">
              
          </div>
            <div className='container text-center'>
            <h1>Here Our Awesome <span>Memories</span></h1>
            <div className="row">
                {
                    images.map(image=><ImgItems imagesItems={image}></ImgItems>)
                }
            </div>
        </div>
      </section>
    );
};

export default GalleryImg;