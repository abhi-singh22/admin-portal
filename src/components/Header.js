import React from 'react';
import logo from "../images/Walgreens-logo.png";

function Header() {
  return (
    <header style={{marginBottom: '20px'}}>
        <div className="header">
            <span ><img src={logo} alt="logo"/></span>
            <span style={{fontSize: 'xx-large',
    color: '#1f85ec', padding: '9px'}}>Admin Portal</span>
            <span style={{marginTop:"8px", padding: '9px'}}>Welcome User</span>
        </div>
      <nav>
        <div className="tab-container">
          <div style={{marginLeft:'10px',marginRight:'10px'}}><a href="#">Home</a></div>
          <div><a href="#">Drive up Registration</a></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
