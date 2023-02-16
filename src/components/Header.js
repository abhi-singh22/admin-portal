import React from 'react';

function Header() {
  return (
    <header style={{marginBottom: '20px'}}>
        <div className="header">
            <span ><img src={"../images/Walgreens-logo.png"} alt="My Image"/></span>
            <span style={{fontSize: 'xx-large',
    color: '#1f85ec'}}>Admin Portal</span>
            <span style={{marginTop:"8px"}}>Welcome User</span>
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
