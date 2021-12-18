import React from 'react';
import './ImgItems.css'
const BlogsItem = (props) => {
    console.log(props)
    const{selectedFile}=props.imagesItems.selectedFile
    return (
        <div className='col-lg-3'>
            <div className="img-blog">
                <img src={selectedFile} alt=""/>
            </div>
        </div>
    );
};

export default BlogsItem;