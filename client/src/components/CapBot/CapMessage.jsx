import Cap from '../../assets/Cap.svg';
import styles from "./CapBot.module.css";


function CapMessage({ chat }) {
    return (
        !chat.hideInChat && (
            <div className={`${styles[chat.role === "model" ? "mensage-bot-message" : "mensage-user-message"]} ${chat.isError ? "error" : ""}`}>
                {chat.role === "model" && <img
                    className={styles["CapBot-chat"]}
                    src={Cap}
                    alt="CapBot assistente virtual"
                />}
                <p className={styles["message-text"]}>{chat.text}</p>
            </div>
        )
    );
};

export default CapMessage;