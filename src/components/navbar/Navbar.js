import React from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/catalog" className="logo">
            <strong>МАГАЗИН</strong>
            <br /> лучшие товары для вас
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/catalog" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Каталог
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/authorization" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Личный кабинет
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/cart" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                <FaShoppingCart className="shop-cart-button" name="Корзина" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
