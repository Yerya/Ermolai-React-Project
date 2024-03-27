// MainMenu.js
import React, { useState } from 'react';
import "./MenuServices.css";
import Button from "../../Buttons/Buttons"; 
import { buttonsList } from "../../../__mocks__/testData";
import {phone} from "../../../__mocks__/testData"

function MainMenu() {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <section className="menu-services flex-elem">
      <h1 className="menu-services__title blue">Browse our menu</h1>
      <h2 className="services__sub-title">Use our menu to place an order online, or <div className="menu-services__b blue">phone<div className="phone-container">+91123232332</div></div> our store to place a pickup order. Fast and fresh food.</h2>
      <div className="menu-services__buttons flex-elem">
        {buttonsList.map((button) => (
          <Button
            key={button.id}
            buttonInfo={button.text}
            isActive={activeButton === button.id}
            onClick={() => setActiveButton(activeButton === button.id ? null : button.id)}
            className={activeButton === button.id ? "button-blue-waves" : "button-transparent"}
          />
        ))}
      </div>
    </section>
  );
}

export default MainMenu;
