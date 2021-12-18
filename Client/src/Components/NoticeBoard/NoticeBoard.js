import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NoticeBoard.css';
const NoticeBoard = () => {
  // const [pdf, setPdf] = useState({})
  // console.log(pdf)
   
  // useEffect(() =>{
  //  fetch('http://localhost:8000/getPdf')
  //  .then(response => response.json())
  //  .then(data => setPdf(data[0]))
  // })
    return (
        <div>
             <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
  <Link to="/pdf"> <Accordion.Header>নোটিশ বোর্ড</Accordion.Header></Link> 
    <Accordion.Body>
      {/* {pdf?.name} */}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>ক্লাস রুটিন</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>পাঠ পরিকল্পনা</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>পরীক্ষার রুটিন</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>রেজাল্ট</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>অফিস আদেশ । Office Order</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default NoticeBoard;