import React from "react";
import style from "./Cooking.module.css";

function Cooking() {
  return (
    <div id={style.cooking}>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div id={style.area}>
        <div id={style.sides}>
          <div id={style.pan}></div>
          <div id={style.handle}></div>
        </div>
        <div id={style.pancake}>
          <div id={style.pastry}></div>
        </div>
      </div>
    </div>
  );
}

export default Cooking;
