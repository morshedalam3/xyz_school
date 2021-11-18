import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../Components/components/index'
import Sidebar from '../Components/Sidebar/Sidebar';

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar/>
      <div className="wrapper d-flex flex-column bg-light">
        {/* <AppHeader /> */}
        <div className="body flex-grow-1 px-3">
          {/* <AppContent /> */}
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default DefaultLayout
