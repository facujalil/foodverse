import React from "react";
import style from "./page.module.css";
import Message from "./components/Message/Message";
import Cooking from "./components/Cooking/Cooking";

function page() {
  return (
    <div className={style.home}>
      <Message message={"Nothing to show, please search something!"} />
      <Cooking />
    </div>
  );
}

export default page;
