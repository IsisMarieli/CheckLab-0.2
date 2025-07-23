import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/cards';
import styles from './Dashboard.module.css';
import CapBot from '../../components/CapBot/CapBot';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Dashboard() {
  const cpfUser = "12345678910";
  const [cpf, setCpf] = useState('');
  const [buscarClicado, setBuscarClicado] = useState(false);
  const [cpfAutenticado, setCpfAutenticado] = useState(false);

  function handleCpfChange(e) {
    const apenasNum = e.target.value.replace(/\D/g, '');
    setCpf(apenasNum);
  }

  function handleBuscar() {
    setBuscarClicado(true);

    if (cpf.length < 11) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo obrigatório!',
        text: 'Por favor, digite seu CPF antes de continuar.',
        confirmButtonColor: 'var(--blue-light)'
      });

      setCpfAutenticado(false);
      setCpf('');
      
      return;
    }

    if (cpf === cpfUser) {
      setCpfAutenticado(true);
    } else {
      setCpfAutenticado(false);
    }

    setCpf('');
  }

  return (
    <div>
      <div className={styles.Header}>
        <Header />
      </div>

      <main className={styles.container}>
        <div className={styles.WrapperInit}>
          <h1>Bem-Vindo(a) ao CheckLab!</h1>
          <div className={styles.WrapperBuscar}>
            <input
              type="password"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={handleCpfChange}
              maxLength={11}
            />
            <button className={styles.btnBuscar} onClick={handleBuscar}>Buscar</button>
          </div>
        </div>

        {buscarClicado && (
          cpfAutenticado ? (
            <div className={styles.cards}>
              <Cards />
            </div>
          ) : (
            <div className={styles.notUser}>
              <p>Embarcante não encontrado 🥹</p>
            </div>
          )
        )}

        <CapBot />
      </main>
    </div>
  );
}

export default Dashboard;
