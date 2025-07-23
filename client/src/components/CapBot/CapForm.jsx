import { useRef } from 'react';
import styles from './CapBot.module.css';

function CapForm({capHistory, setCapHistory, generateBotResponse}) {
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // update chat history
    setCapHistory((history) => [...history, { role: "user", text: userMessage }]);
    
    // CapBot pensando...
    setTimeout(() => setCapHistory((history) => [...history, { role: "model", text: "Analisando . . ." }]),
    600);

    // chamar função para gerar a resposta do Capbot
    generateBotResponse([...capHistory, { role: "user", text: `Usando os detalhes fornecidos acima, por favor, responda a esta consulta: ${userMessage}` }]);
  };

  return (
    <form className={styles["chat-form"]} onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Mensagem. . ."
        className={styles["message-input"]}
        required
      />
      <button className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
}

export default CapForm;
