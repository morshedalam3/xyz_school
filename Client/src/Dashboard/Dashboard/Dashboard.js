import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Share/Footer/Footer';
import SecondDashboard from '../SecondDashboard/SecondDashboard';
import './Dashboard.css'
const Dashboard = () => {
    return (
          <section>
         <div className="dashboard-banner">
        <Header/>
        <SecondDashboard></SecondDashboard>
            </div>
            <Footer/>
            </section>
    );
};

export default Dashboard;