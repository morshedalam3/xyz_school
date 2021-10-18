import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './ImportantLink.css';
const ImportantLink = () => {
    return (
        <div>
            <div className="Header-top">
                <h3>গুরুত্বপূর্ণ লিঙ্ক</h3>
                <div className="link-im">
                    <ul style={{}}>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>জাতীয় শিক্ষা বোর্ড </span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>ই-বুক</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>শিক্ষক বাতায়ন</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট সিস্টেম</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>দিনাজপুর শিক্ষা বোর্ড অফিসিয়াল ওয়েবসাইট</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>শিক্ষা মন্ত্রনালয়</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>দিনাজপুর শিক্ষা বোর্ড</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>জেলা প্রশাসকের কার্যালয়, গাইবান্ধা।</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>রংপুর বিভাগীয় কমিশনারের কার্যালয়</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>বাংলাদেশ জাতীয় তথ্য বাতায়ন</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>eSIF</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>eFF</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>Education Board Results</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>Directorate of Inspection and Audit</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>বিদ্যালয়ের অফিসিয়াল ফেসবুক পেজ</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>Class Teachers Login</span></li>
                        <li><FontAwesomeIcon icon={faArrowAltCircleRight} /><span>মাল্টিমিডিয়া কন্টেন্ট ডাউনলোড</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ImportantLink;