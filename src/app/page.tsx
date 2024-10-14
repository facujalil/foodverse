import style from "./page.module.css";
import Message from "./components/common/Message/Message";
import Cooking from "./components/common/Cooking/Cooking";

function page() {
  return (
    <div className={style.home}>
      <Message message="Nothing to show, please search something!" />
      <Cooking />
    </div>
  );
}

export default page;
