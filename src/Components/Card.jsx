import React, { useEffect, useState } from "react";
import { makeServer } from "../server";
import "../Styling/cards.css";
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Card() {
  makeServer();
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  // console.log(search);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTemplates(data.templates.models);
      })
      .catch((error) => {
        console.error("Error parsing JSON:", error);
      });
  }, [searchParams.type]);
  //   console.log(`hello: ${templates}`);
  const filteredTemp = typeFilter
    ? templates.filter((temp) => temp.type === typeFilter)
    : templates;

  const templateItem = filteredTemp
    .filter((template) => {
      return search.toLowerCase() === ""
        ? template
        : template.type.toLowerCase().includes(search);
    })
    .map((template) => (
      <div className="card" key={template.id}>
        <div>
          <div className="imgBtnContainer">
            <div>
              <img
                src={template.imageUrl}
                alt=""
                className="image"
                width="228px"
                height="228px"
              />
            </div>
            <button className="use-button">Use this</button>
          </div>
          <h2>{template.name}</h2>
        </div>
      </div>
    ));

  return (
    <>
      <div className="main">
        <div className="search-container">
          <div className="icon">
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          </div>
          <div className="search-input">
            <input
              type="text"
              className="search-bar"
              placeholder="Search email templates"
              // value={searchTerm}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="content">
          <div className="card-container">
            <div className="card-front">{templateItem}</div>
            <div className="card-back">{templateItem}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
