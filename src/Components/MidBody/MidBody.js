import React, { useEffect, useState } from 'react';
import fakeData from '../../Assets/FakeData/FakeData.json'
import banner1 from '../../Assets/images/sunset-1373171__340.jpg'
import banner2 from '../../Assets/images/tree-736885__480.jpg';
import { Carousel } from 'react-bootstrap';
import Quotes from './Quotes/Quotes';
const MidBody = () => {
    const [data, setData] = useState([]);
  
    useEffect(() =>{
      setData(fakeData)
  },[])
    return (
        <div>
             <Carousel>
              <Carousel.Item>
                <img
                  classNameName="d-block w-100 images"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  classNameName="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
            {
              data.map(quotes => <Quotes key={quotes.id} quotes={quotes}></Quotes>)
            }
        </div>
    );
};

export default MidBody;