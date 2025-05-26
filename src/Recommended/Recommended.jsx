import "./recommended.css";
import Buttons from "../components/Buttons";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

const Recommended = ({ handleClick, toggleMenu, isMenu }) => {

  return (
    <>
      <div className="recommended">
        <div className="menu-container" onClick={toggleMenu}>{isMenu ? <TfiMenu /> : <RiCloseLargeFill />}</div>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  )
}

export default Recommended;