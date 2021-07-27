import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="text">
        <h1>
          Добро пожаловать на <span>Olympus</span>!
        </h1>
        <p className="h-sub-text">Здесь Вы сможете быстро и удобно узнать льготы интересующего Вас ВУЗа</p>
      </div>
      <div className="icons">
        <Link to={{pathname: "https://t.me/FirePancake"}} target="_blank" className="icon-holder">
          <FontAwesomeIcon icon={faTelegram} className="icon telegram"/>
        </Link>
        <Link to={{pathname: "https://github.com/FirePancake1177"}} target="_blank" className="icon-holder">
          <FontAwesomeIcon icon={faGithub} className="icon github"/>
        </Link>
        <Link to={{pathname: "https://vk.com/id377483669"}} target="_blank" className="icon-holder">
          <FontAwesomeIcon icon={faVk} className="icon vk"/>
        </Link>

      </div>

    </div>
  );
}

export default HomePage;