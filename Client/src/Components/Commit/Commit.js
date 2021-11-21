import React from 'react';
// import emailjs from 'emailjs-com';
import './Comment.css'


const Comment = () => {

  function sendEmail(e) {
    // e.preventDefault();

    // emailjs.sendForm('gmailmessage', 'template_9zjsxhk', e.target, 'user_vs1JqDLRwcAI4jPH7qrDX')
    //   .then((result) => {
    //     alert('message Send Done Successfully')
    //   }, (error) => {
    //     alert(error.message);
    //   });
  }

  return (
    <div className="email-section">
      <div style={{ background: "#252934" }} className="d-flex justify-content-center">
        <form style={{ width: '50%' }} className=" contact-form " onSubmit={sendEmail}>
          <input className="form-control" type="hidden" name="contact_number" />
          <label style={{ color: 'white' }}>Name</label>
          <input className="form-control" type="text" name="user_name" />
          <label style={{ color: 'white' }}>Email</label>
          <input className="form-control" type="email" name="user_email" />
          <label style={{ color: 'white' }}>Message</label>
          <textarea className="form-control" name="message" />
          <br></br>
          <input className="button3" type="submit" value="Send" />
        </form>
      </div>
    </div>

  );
}
export default Comment;