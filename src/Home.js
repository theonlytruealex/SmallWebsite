import React from "react";
import "./Home.css";
import image from "./image.jpg";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";

function Home() {
  return (
    <div className="bdy">
      <div className="flex-contain">
        <div className="leftside">
          <div className="img">
            <img src={image} alt="cooperare" />
          </div>
          <div className="buttons-left">
            <div className="button-icon">
              <span className="icon-left">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div className="button-icon-text-left">Rectorat @ UPB</div>
            </div>
            <div className="button-icon">
              <span className="icon-left">
                <i className="fa-solid fa-calendar"></i>
              </span>
              <div className="button-icon-text-left">2-3 martie</div>
            </div>
            <div className="orange-button">Aplica</div>
          </div>
        </div>
        <div className="rightside">
          <div className="info">
            <p>
              <h3>
                <b>EESTEC Fair</b>
              </h3>{" "}
              EESTEC Fair este un târg de cariere dedicat studenților, care
              facilitează interacțiunea dintre aceștia și companii, în timp ce
              le sunt pregătite multe alte activități
            </p>
          </div>
          <div className="countdown">
            <p>
              <h3>Timp rămas până la eveniment:</h3>
            </p>
            <p>
              <h1>05d | 02h | 05m</h1>
            </p>
          </div>
          <br></br>
          <h1>Program</h1>
          <div className="underline-right"></div>
          <div className="program">
            <div className="joi">
              <p>
                <h2>Joi, 2.03</h2>
              </p>
              <div className="underline"></div>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea, AN024</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
            </div>
            <div className="vineri">
              <p>
                <h2>Vineri, 3.03</h2>
              </p>
              <div className="underline"></div>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
              <p className="text-left">10:00 - 11:00</p>
              <p className="text-right">Alex Nedea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
