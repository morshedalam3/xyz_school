import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="email-section">
      <h1 className="text-center">যোগাযোগ</h1>
      <div style={{ background: "#252934" }} className="d-flex justify-content-center">
        <form style={{ width: '50%' }} className=" contact-form ">
          <input className="form-control" type="hidden" name="contact_number" />
          <label style={{ color: 'white' }}>আপনার নাম </label>
          <input className="form-control" type="text" name="user_name" />
          <label style={{ color: 'white' }}>আপনার ইমেইল</label>
          <input className="form-control" type="email" name="user_email" />
          <label style={{ color: 'white' }}>বিষয়</label>
          <textarea className="form-control" name="message" />
          <label style={{ color: 'white' }}>বার্তা</label>
          <textarea className="form-control" name="message" />
          <br></br>
          <input className="button3" type="submit" value="Send" />
        </form>
      </div>
    </div>
    );
};

export default Contact;