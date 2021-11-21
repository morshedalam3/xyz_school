import React from 'react';
import './FooterTop.css'
import logo from '../.../../../../Assets/images/footer-logo.png'
const FooterTop = () => {
  return (
    <section className="footer-top-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-area">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-xl-6 d-flex footer-top-menu-aria">
            <div>
              <ul>
              <li class="current"><a href="/" id="link-49" class="hom-page selected"><span>হোম পেজ</span></a></li>
              <li><a href="/page/administration_activities" id="link-51"><span>প্রাতিষ্ঠানিক কার্যকম</span></a></li>
              <li><a href="/page/ggbhs-multimedia-content" id="link-53"><span>মাল্টিমিডিয়া কন্টেন্ট ডাউনলোড</span></a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="/page/school_administration" id="link-50"><span>স্কুল প্রশাসন</span></a></li>
               <li><a href="/page/schoolinfo" id="link-52"><span>আমাদের কথা</span></a></li>
               <li><a href="/contact" id="link-54"><span>যোগাযোগ</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;