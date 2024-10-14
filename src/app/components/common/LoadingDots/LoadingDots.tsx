import style from "./LoadingDots.module.css";

function LoadingDots() {
  return (
    <div className={style.loadingDots}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>
  );
}

export default LoadingDots;
