import Swal from 'sweetalert2';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './Cards.module.css';

const data = [
    { nome: 'Jan', presenças: 7 },
    { nome: 'Fev', presenças: 8 },
    { nome: 'Mar', presenças: 6 },
    { nome: 'Abr', presenças: 9 },
    { nome: 'Mai', presenças: 9 },
    { nome: 'Jun', presenças: 5 }
];

function Cards() {
    // gerar código aleatório
    function gerarCodigo() {
        return Math.random().toString(36).substring(2, 20).toUpperCase();
    }

    // pop-up brinde usando a biblioteca SweetAlert2
    function mostrarBrinde() {
        const codigoBrinde = gerarCodigo();

        Swal.fire({
            title: '🎁 Parabéns!',
            html: `Você desbloqueou um brinde exclusivo pela sua presença constante no laboratório!<br><br>
            Apresente o código: <strong style="font-size: 22px;">${codigoBrinde}</strong> <br><br> na recepção do lab e descubra seu brinde!`,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: 'var(--blue-light)',
            background: 'var(--blue-transparent)',
            color: 'var(--blue-dark)'
        });
    }

    return (
        <div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3>Entradas Registradas</h3>
                    <h1>44</h1>
                </div>

                <div className={styles.card}>
                    <h3>Saídas Registradas</h3>
                    <h1>44</h1>
                </div>

                <div className={styles.cardGift}>
                    <h3>Brindes Acumulados</h3>
                    <h1>2</h1>
                </div>

                <div className={styles.cardFreq}>
                    <h3>Frequência Semestral</h3>
                    <h1>75%</h1>
                </div>

                <div className={styles.cardGraphic}>
                    <h3>Presenças por mês</h3>
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={data}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="nome" />
                            <YAxis domain={[0, 30]} />
                            <Tooltip />
                            <Bar dataKey="presenças" fill="#1450EF" barSize={70} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className={styles.cardInfor}>
                    <h3>Embarcante</h3>
                    <p><strong>Nome:</strong> <span>Isis Marieli Da Silva Moura</span></p>
                    <p><strong>IES:</strong> <span>UNINASSAU</span></p>
                    <p><strong>Email:</strong> <span>Isismarieli1@gmail.com</span></p>

                    <div className={styles.gift}>
                        <h4>
                            Sua presença e dedicação no Laboratório de Inovação
                            valem muito mais do que horas: valem conquistas reais!
                        </h4>
                    </div>
                    <button type="button" className={styles.buttonGift} onClick={mostrarBrinde}>
                        Resgatar Brinde! 🎁
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cards;
