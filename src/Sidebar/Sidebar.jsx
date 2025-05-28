
import "./sidebar.css";
import Cathegory from "./Cathegory/Cathegory";
import Color from "./Cathegory/Color/Colors";
import Price from "./Price/Price";
import './sidebar.css';
import ThemeToggle from "../components/ThemeToggle";

const Sidebar = ({ handleChange, isMenu }) => {
  return (

    <section className={` sidebar ${!isMenu ? "show-sidebar" : "hide-sidebar"}`}>
      <div className="sidebar-header">
        <ThemeToggle />
      </div>
      <div className="sidebar-content">

        <Cathegory handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </div>
    </section>

  )
}

export default Sidebar