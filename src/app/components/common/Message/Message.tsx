import style from "./Message.module.css";

interface Props {
  message: string;
  error?: boolean;
}

function Message({ message, error = false }: Props) {
  return (
    <p className={error ? style.errorMessage : style.message}>{message}</p>
  );
}

export default Message;
