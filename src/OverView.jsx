import FacebookIcon from "./assets/images/icon-facebook.svg";
import UpIcon from "./assets/images/icon-up.svg";
function OverView({ title, count, socialIcon, status, arrowIcon }) {
  return (
    <div className="view-container">
      <div className="view-container-card">
        <div className="view-card">
          <div className="view-data">
            <div className="page-view">
              <p className="page-view-text">{title}</p>
              <h1 className="page-view-count">{count}</h1>
            </div>
            <div className="view-icons">
              <div className="view-social icon">
                <img src={socialIcon} alt="" />
              </div>
              <div className="view-arrow-icon">
                <img src={arrowIcon} alt="" />
                <span>{status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
