import React from "react";
import "../Styling/hnf.css";
import img1 from "../assets/image1.svg";

function Header() {
  return (
    <>
      <div className="heading">
        <img src={img1} alt="" />
        <p className="paragraph">
          100s of free templates to help you craft the perfect marketing
          journey.
        </p>
      </div>
    </>
  );
}

export default Header;
