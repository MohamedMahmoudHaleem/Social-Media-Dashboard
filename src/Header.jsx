import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  console.log("🚀 ~ Header ~ toggle:", toggle);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="header">
      <div className="info">
        <h2 className="header-title">SociaI Media Dashboard</h2>
        <div className="toggler">
          <p className="data">Total Followers : 23,004</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="toggle-holder">
        <p className="toggle-title">Dark Mode</p>
        <input onClick={handleToggle} type="checkbox" className="btn" />
      </div>
    </div>
  );
}

export default Header;
