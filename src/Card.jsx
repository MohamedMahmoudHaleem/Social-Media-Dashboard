export default function Card({
  socialIcon,
  name,
  follwers,
  status,
  arrowIcon,
  borderColor,
}) {
  return (
    <div className="card" style={{ borderTopColor: borderColor }}>
      <div className="social-account">
        <div className="icon">
          <img src={socialIcon} alt="facebook" />
        </div>
        <p className="account-name">{name}</p>
      </div>
      <div className="follower">
        <h1 className="counts">{follwers}</h1>
        <p className="follower-title">FOLLOWERS</p>
      </div>
      <div className="status">
        <div className="up-down">
          <img src={arrowIcon} alt="up" />
        </div>
        <p className="today-count">{status} Today</p>
      </div>
    </div>
  );
}