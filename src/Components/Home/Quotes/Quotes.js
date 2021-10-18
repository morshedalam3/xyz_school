import React from 'react';
import './Quotes.css'
const Quotes = ({quotes}) => {
    console.log(quotes);
    return (
        <div>
            <div className="heading"> <h5>{quotes.name}</h5></div>
            <div className="d-flex mt-5">
            <div className="imgbox">
                <img style={{width:"100%"}} src={quotes.image}></img>
            </div>
           <div style={{marginLeft:"10px"}}><p>{quotes.quote}</p></div>
            </div>
           
        </div>
    );
};

export default Quotes;