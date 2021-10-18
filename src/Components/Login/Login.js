import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="email-section">
                <div style={{ background: "#252934" }} className="d-flex justify-content-center">
                    <form style={{ width: '50%' }} className=" contact-form ">
                        <label style={{ color: 'white' }}>Email</label>
                        <input className="form-control" type="text" name="user_name" />
                        <label style={{ color: 'white' }}>Password</label>
                        <input className="form-control" type="password" name="user_email" />
                        <input className="button3" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;