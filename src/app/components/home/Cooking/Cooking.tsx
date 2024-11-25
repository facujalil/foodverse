import style from "./Cooking.module.css";

function Cooking() {
  return (
    <div className={style.cooking}>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.area}>
        <div className={style.sides}>
          <div className={style.pan}></div>
          <div className={style.handle}></div>
        </div>
        <div className={style.pancake}>
          <div className={style.pastry}></div>
        </div>
      </div>
    </div>
  );
}

export default Cooking;
