import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header bg-light fixed-top shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="header__logo">Весёлые Зверушки</div>
        <nav className="header__nav">
          <a href="/" className="header__link btn btn-outline-success mx-2">Главная</a>
          <a href="/logopedam" className="header__link btn btn-outline-success mx-2">Логопедам</a>
          <a href="/roditelyam" className="header__link btn btn-outline-success mx-2">Родителям</a>
          <a href="/obratnaya-svyaz" className="header__link btn btn-outline-success mx-2">Обратная связь</a>
          <a href="/o-nas" className="header__link btn btn-outline-success mx-2">О нас</a>
          <a href="/games" className="header__link btn btn-outline-success mx-2">Игры</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;