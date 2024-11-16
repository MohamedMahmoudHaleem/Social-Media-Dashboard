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
        <h2 className="title">SociaI Media Dashboard</h2>
        <div className="toggler">
          <p className="title">Dark Mode</p>
          <div className="toggle-holder">
            <input onClick={handleToggle} type="checkbox" className="btn" />
          </div>
        </div>
      </div>
      <p className="data">Total Followers : 23,004</p>
    </div>
  );
}

export default Header;
