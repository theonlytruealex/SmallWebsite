import "./sheets.css";
import React, { useState } from "react";

function About() {
  const [showNetworking, setShowNetworking] = useState(false);
  const [showConferinte, setShowConferinte] = useState(false);
  const [showActivitati, setShowActivitati] = useState(false);
  return (
    <div className="bdy">
      <div className="mobile-right">
        <h1>Despre</h1>
      </div>
      <div className="underline-right-despre"></div>
      <div className="content">
        EESTEC Fair este un eveniment de recrutare în care angajatorii și
        recrutorii se întâlnesc cu potențiali angajați și în care studenții
        aflați în căutarea unui loc de muncă găsesc mai multe despre locurile de
        muncă deschise la potențialii angajatori.
        <div className="buttons-despre">
          <div className="button-icon">
            <span className="icon-left">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <div className="button-icon-text-left">Rectorat @ UPB</div>
          </div>
          <div className="orange-button conditional-element">Aplica</div>
          <div className="button-icon">
            <span className="icon-left">
              <i className="fa-solid fa-calendar"></i>
            </span>
            <div className="button-icon-text-left">2-3 martie</div>
          </div>
        </div>
      </div>
      <h1 className="mobile-left">Sfaturi pentru particianti</h1>
      <div className="underline-left"></div>
      <div className="content">
        <div className="list-despre">
          <div className="list-item">
            Creează-ți un CV clar şi cât mai uşor de citit.
          </div>
          <div className="list-item">
            Crează-ți și exersează un elevator pitch pentru eveniment.
          </div>
          <div className="list-item">
            Schițează-ți câteva întrebări pe care să le poți adresa fiecărui
            recrutor.
          </div>
        </div>
        <div className="buttons-despre">
          <div
            className="button-icon"
            onClick={() => setShowNetworking(!showNetworking)}
          >
            <div className="button-icon-text-right">Networking</div>
            <span className="icon-right">
              <i
                className={
                  showNetworking
                    ? "fa-solid fa-chevron-up"
                    : "fa-solid fa-chevron-down"
                }
              ></i>
            </span>
            <p
              className={
                showNetworking ? "dropdown-text show" : "dropdown-text"
              }
            >
              According to all known laws of aviation, there is no way a bee
              should be able to fly. Its wings are too small to get its fat
              little body off the ground. The bee, of course, flies anyway
              because bees don't care what humans think is impossible.
            </p>
          </div>

          <div
            className="button-icon"
            onClick={() => setShowConferinte(!showConferinte)}
          >
            <div className="button-icon-text-right">Conferinte</div>
            <span className="icon-right">
              <i
                className={
                  showConferinte
                    ? "fa-solid fa-chevron-up"
                    : "fa-solid fa-chevron-down"
                }
              ></i>
            </span>
            <p
              className={
                showConferinte ? "dropdown-text show" : "dropdown-text"
              }
            >
              According to all known laws of aviation, there is no way a bee
              should be able to fly. Its wings are too small to get its fat
              little body off the ground. The bee, of course, flies anyway
              because bees don't care what humans think is impossible.
            </p>
          </div>

          <div
            className="button-icon"
            onClick={() => setShowActivitati(!showActivitati)}
          >
            <div className="button-icon-text-right">Activitati</div>
            <span className="icon-right">
              <i
                className={
                  showActivitati
                    ? "fa-solid fa-chevron-up"
                    : "fa-solid fa-chevron-down"
                }
              ></i>
            </span>
            <p
              className={
                showActivitati ? "dropdown-text show" : "dropdown-text"
              }
            >
              According to all known laws of aviation, there is no way a bee
              should be able to fly. Its wings are too small to get its fat
              little body off the ground. The bee, of course, flies anyway
              because bees don't care what humans think is impossible.
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-right">
        <h1>Echipa</h1>
      </div>
      <div className="underline-right-despre"></div>
      <div className="content-poze-2">
        <img src="media/pozaBianca.png" alt="Bianca-Ioana Alexe" />
        <img src="media/pozaFabian.png" alt="Fabian Hanta" />
      </div>
      <div className="content-poze-4">
        <img src="media/pozaVivi.png" alt="Viviana Pavelescu" />
        <img src="media/pozaAna.png" alt="Ana Radoi" />
        <img src="media/pozaAndra.png" alt="Andra Paun" />
        <img src="media/pozaRares.png" alt="Rares Braga" />
      </div>
      <div className="green-line"></div>
    </div>
  );
}

export default About;
