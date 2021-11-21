import React, { useEffect, useState } from 'react';
import img1 from '../../images/ge6.jpg'
import img2 from '../../images/ge1.jpg'
import img3 from '../../images/ge2.jpg'
import img4 from '../../images/cw27.jpg'
import img5 from '../../images/ge7.jpg'
import img6 from '../../images/queen.jpg'
import ImgItems from '../ImgItems/ImgItems';
import './GalleryImg.css'

const GalleryImg = () => {

    const[images,setImages]=useState([])
     useEffect(()=>{
        fetch('https://glacial-tundra-14316.herokuapp.com/AddBlogs')
        .then(res=>res.json())
        .then(data=>setImages(data))
     },[0])




    // const images=[
    //     {
    //         img:img1
    //     },
    //     {
    //         img:img2
    //     },
    //     {
    //         img:img3
    //     },
    //     {
    //         img:img4
    //     },
    //     {
    //         img:img5
    //     },
    //     {
    //         img:img6
    //     }
    // ]
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