import React from 'react';
import { CSidebar,CSidebarBrand,CSidebarNav,CNavTitle,CNavItem,CNavGroup,CSidebarToggler, CBadge } from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilPuzzle, cilSpeedometer } from '@coreui/icons';
const Sidebar = () => {
    return (
        <div>
            <CSidebar>
  <CSidebarBrand>Sidebar Brand </CSidebarBrand>
  <CSidebarNav>
    {/* <CNavTitle>Nav Title</CNavTitle> */}
    <CNavItem href="#">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
      Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
      With badge
      <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    <CNavGroup toggler="Nav">
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> 
        Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> 
        Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>
        </div>
    );
};

export default Sidebar;