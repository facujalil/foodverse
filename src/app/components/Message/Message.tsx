import React from "react";
import style from "./Message.module.css";

interface Props {
  error?: boolean;
  message: string;
}

function Message({ error = false, message }: Props) {
  return (
    <>
      {error ? (
        <p className={style.errorMessage}>{message}</p>
      ) : (
        <p className={style.message}>{message}</p>
      )}
    </>
  );
}

export default Message;
