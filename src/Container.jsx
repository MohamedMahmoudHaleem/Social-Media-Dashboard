import FacebookIcon from "./assets/images/icon-facebook.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import InstagramIcon from "./assets/images/icon-instagram.svg";
import YotubeIcon from "./assets/images/icon-youtube.svg";
import DownIcon from "./assets/images/icon-down.svg";
import UpIcon from "./assets/images/icon-up.svg";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import OverView from "./OverView.jsx";
const cardData = [
  {
    id: crypto.randomUUID(),
    icon: FacebookIcon,
    name: "@mohamed",
    followers: "1987",
    status: 12,
    arrowIcon: UpIcon,
    borderColor: " hsl(208, 92%, 53%)",
  },
  {
    id: crypto.randomUUID(),
    icon: TwitterIcon,
    name: "@ibrahim",
    followers: "1044",
    status: 99,
    arrowIcon: UpIcon,
    borderColor: "hsl(203, 89%, 53%)",
  },
  {
    id: crypto.randomUUID(),
    icon: InstagramIcon,
    name: "@seif",
    followers: "11k",
    status: 1099,
    arrowIcon: UpIcon,
    borderColor: "hsl(330, 90%, 50%)",
  },
  {
    id: crypto.randomUUID(),
    icon: YotubeIcon,
    name: "@hosny",
    followers: "1987",
    status: 144,
    arrowIcon: DownIcon,
    borderColor: "hsl(348, 97%, 39%)",
  },
];
const viewData = [
  {
    title: "Page Views",
    id: crypto.randomUUID(),
    count: 87,
    icon: FacebookIcon,
    arrowIcon: UpIcon,
    status: "3%",
  },
  {
    title: "Page Views",
    id: crypto.randomUUID(),
    count: 87,
    icon: FacebookIcon,
    arrowIcon: UpIcon,
    status: "3%",
  },
  {
    title: "Page Views",
    id: crypto.randomUUID(),
    count: 87,
    icon: FacebookIcon,
    arrowIcon: UpIcon,
    status: "3%",
  },
  {
    title: "Page Views",
    id: crypto.randomUUID(),
    count: 87,
    icon: FacebookIcon,
    arrowIcon: UpIcon,
    status: "3%",
  },
];

export default function Container() {
  return (
    <div className="container">
      <div className="top-bg"></div>
      <Header />
      <div className="card-container">
        {cardData.map((card) => (
          <Card
            key={card.id}
            socialIcon={card.icon}
            name={card.name}
            follwers={card.followers}
            status={card.status}
            arrowIcon={card.arrowIcon}
            borderColor={card.borderColor}
          />
        ))}
      </div>
      <h3 className="view-title">Overview - Today</h3>
      <div className="view-container">
        {viewData.map((view) => (
          <OverView
            key={view.id}
            title={view.title}
            count={view.count}
            socialIcon={view.icon}
            status={view.status}
            arrowIcon={view.arrowIcon}
          />
        ))}
      </div>
    </div>
  );
}
