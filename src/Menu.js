import "./sheets.css";
import React, { useState } from "react";

const Menu = ({ setPage, currentPage }) => {
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const [menuOpen, setMenuOpen] = useState(0);
  const handleMenuClick = () => {
    setMenuOpen(1 - menuOpen);
  };
  return (
    <div>
      <div
        id="menu"
        className={menuOpen === 1 ? "conditional-element" : ""}
        onClick={handleMenuClick}
      >
        <i class="fa-solid fa-bars fa-2xl"></i>
      </div>
      <div
        className={`home-body ${menuOpen === 1 ? "menu-open" : "menu-closed"}`}
      >
        <div className="home-poza">
          <img
            src="media/logo-eestecfair.svg"
            className="logo"
            alt="EESTEC Fair"
          />
        </div>
        <div className="optiuni">
          <div className="ro-en-menu">
            <span> RO </span>
            <span> / </span>
            <span className="inactive"> EN </span>
          </div>
          <div
            className={currentPage === 0 ? "optiune highlight-menu" : "optiune"}
            onClick={() => {
              window.scrollTo({ top: 0 });
              handlePageChange(0);
              handleMenuClick();
            }}
          >
            {" "}
            Acasă{" "}
          </div>
          <div
            className={currentPage === 1 ? "optiune highlight-menu" : "optiune"}
            onClick={() => {
              window.scrollTo({ top: 0 });
              handlePageChange(1);
              handleMenuClick();
            }}
          >
            {" "}
            Despre{" "}
          </div>
          <div
            className={currentPage === 2 ? "optiune highlight-menu" : "optiune"}
            onClick={() => {
              window.scrollTo({ top: 0 });
              handlePageChange(2);
              handleMenuClick();
            }}
          >
            {" "}
            FAQ{" "}
          </div>
          <div className="optiune"> Contact </div>
          <div className="optiune"> Sponsor principal </div>
          <div className="home-button">
            <p>Aplică</p>
          </div>
          <div className="ro-en-navbar">
            <span>
              {" "}
              <b>RO</b>{" "}
            </span>
            <span className="inactive"> EN </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
