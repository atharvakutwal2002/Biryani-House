import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css'; 
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodieDoodie</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food " />
      </div>
    </>
  );
};

export default Header;
