import headerImg from "../../assets/img/header.jpg";
import "./Header.css";
const Header = ({ title, description }) => {
  return (
    <header className="header text-white text-center d-flex align-items-center justify-content-center">
      <img src={headerImg} alt="Header" className="header-img" />
      <div className="header-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <hr className="header-hr" />
    </header>
  );
};

export default Header;
