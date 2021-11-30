import React, { useEffect, useState } from 'react';
import AdminDetails from '../AdminDetails/AdminDetails';
import './AdminShow.css'
const AdminShow = () => {
    const [showAdmin,setShowAdmin]=useState([])
    useEffect(()=>{
     
        fetch('http://localhost:8000/getAdmin')
        .then(res=>res.json())
        .then(data=>setShowAdmin(data))

    },[0])
    return (
        <div>
            <div className="banner-admin-show">
                <div className="row">
                    <div className="col-lg-9 py-5">
                        <div className="admin-caption py-5"></div>
                        <div className="table-container">
                            <table class="table table-borderless ">
                                <thead>
                                    <tr>

                                        <th scope="col">Admin Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Delete Admin</th>

                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                      showAdmin.map(admin=><AdminDetails AdminDetailsShow={admin}></AdminDetails>)
                                  }
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminShow;