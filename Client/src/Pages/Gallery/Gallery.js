import React from 'react';
import { Col, Row } from "react-bootstrap";
import HomeRightSide from '../../Common/HomeRightSide/HomeRightSide';
import GalleryImg from '../../Components/GalleryImg/GalleryImg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Share/Footer/Footer';
const Gallery = () => {

    return (
        <div>
             <Header/>
            {/* <Container maxWidth="lg"> */}
        <Row>
          <Col lg={8} classNameName="mt-4">
           <GalleryImg/>
          </Col>
          <Col lg={4}>
            <HomeRightSide />
          </Col>
        </Row>
      {/* </Container> */}
      <Footer/>
        </div>
    );
};

export default Gallery;