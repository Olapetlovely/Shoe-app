import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./navigation.css";
import olpLogo from "../../img/olpLogo.png";


const Navigation = ({ handleInputChange }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth >= 442);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 518);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <nav>
      {isMobile ? <h1 className="header-title"><span>Ola's</span> Shoe Haven</h1> : <img className="logo-img" src={olpLogo} />}
      <div className="nav-container">
        <input onChange={handleInputChange} type="text" placeholder="Enter your search shoes..." className="search-input" />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav >
  )
}

export default Navigation