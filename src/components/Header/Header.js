import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logoYandex from "../../images/logo-yandex.svg";
import logoPracticum from "../../images/logo-practicum.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <a
          href="https://ya.ru/"
          className="header__link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoYandex} alt="логотип Яндекс" />
        </a>
        <a
          href="https://practicum.yandex.ru"
          className="header__link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoPracticum} alt="логотип Яндекс.Практикум" />
        </a>
      </div>
      <div className="header__button-container">
        <nav className="header__nav">
          <Link
            to="vacansy"
            className="header__nav-link"
            smooth={true}
            duration={600}
          >
            Вакансии
          </Link>
          <Link
            to="about-us"
            className="header__nav-link"
            smooth={true}
            duration={600}
          >
            О нас
          </Link>
          <Link
            to="faq"
            className="header__nav-link"
            smooth={true}
            duration={600}
          >
            FAQ
          </Link>
          <Link
            to="contacts"
            className="header__nav-link"
            smooth={true}
            duration={600}
          >
            Контакты
          </Link>
        </nav>
        <button className="header__button" type="button">
          Подобрать вакансию
        </button>
      </div>
    </header>
  );
}

export default Header;
