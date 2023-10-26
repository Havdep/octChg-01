import React from "react";
import "../Styling/SidebarStyle.css";
import { NavLink } from "react-router-dom";

function NavSidebar() {
  function handleAnn() {}
  function handleEve() {}
  function handleTra() {}
  function handleHol() {}
  return (
    <>
      <div className="parent">
        <div className="categories">Categories</div>
        <div className="labels">
          <NavLink to="..">Back to Home</NavLink>
          <NavLink to="/announcement">
            <label>
              <input
                onChange={handleAnn}
                type="checkbox"
                name="announcement"
                id=""
              />
              announcement
            </label>
          </NavLink>
          <NavLink to="/transaction">
            <label>
              <input
                onChange={handleTra}
                type="checkbox"
                name="transactional"
                id=""
              />
              transactional
            </label>
          </NavLink>
          <NavLink to="/event">
            <label>
              <input
                onChange={handleEve}
                type="checkbox"
                name="events"
                id=""
                value="value"
              />
              events
            </label>
          </NavLink>
          <NavLink to="/holiday">
            <label>
              <input
                value="value"
                onChange={handleHol}
                type="checkbox"
                name="holiday"
                id=""
              />
              holiday
            </label>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavSidebar;
