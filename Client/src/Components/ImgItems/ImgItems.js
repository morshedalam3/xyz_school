import React from 'react';
import './ImgItems.css'
const BlogsItem = (props) => {
    const{selectedFile}=props.imagesItems
    return (
        <div className='col-lg-3'>
            <div className="img-blog">
                <img src={selectedFile} alt=""/>
            </div>
        </div>
    );
};

export default BlogsItem;