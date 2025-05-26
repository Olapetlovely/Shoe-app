
import "./sidebar.css";
import Cathegory from "./Cathegory/Cathegory";
import Color from "./Cathegory/Color/Colors";
import Price from "./Price/Price";
import './sidebar.css';

const Sidebar = ({ handleChange, isMenu }) => {
  return (
    <>
      <section className={` sidebar ${!isMenu ? "show-sidebar" : "hide-sidebar"}`}>
        <Cathegory handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidebar