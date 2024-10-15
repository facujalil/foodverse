import style from "./NoImage.module.css";
import { MdOutlineImage } from "react-icons/md";

function NoImage() {
  return (
    <div className={style.noImage}>
      <MdOutlineImage />
    </div>
  );
}

export default NoImage;
