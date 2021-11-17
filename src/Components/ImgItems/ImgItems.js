import React from 'react';
import './ImgItems.css'
const BlogsItem = (props) => {
    const{imageURL}=props.imagesItems
    return (
        <div className='col-lg-3'>
            <div className="img-blog">
                <img src={imageURL} alt=""/>
            </div>
        </div>
    );
};

export default BlogsItem;