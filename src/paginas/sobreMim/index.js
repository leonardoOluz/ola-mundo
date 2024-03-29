import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto_sobre_mim.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Leonardo Luz"
        >
            <h3 className={styles.subtitulo}>
                Hello, people. My name is Leonardo Luz.
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="foto sobre mim"
            />
            <p className={styles.paragrafo}>Olá tudo bem ? Eu sou oficial de eletrica no clube SEP mais conhecido como Palmeiras</p>
            <p className={styles.paragrafo}>Me formei em Técnico eletrotécnica no instituto Edson em 2012, fiz cursos profissionalizantes no Senai Ipiranga.</p>
            <p className={styles.paragrafo}>Desde 2020 venho me capacitando em programação, fiz alguns cursos de logica de programação com o professor Guanabara, cursos na área de testes de software para analista de testes.</p>
            <p className={styles.paragrafo}>Hoje estou estudando Analise de Desenvolviemto de Sistema na faculdade Uninove</p>
            <p className={styles.paragrafo}>Tenho conhecimentos basicos na linguagem Java, hoje estou focado em HTML5, CSS3 e JavaScript.</p>
            <p className={styles.paragrafo}>Tenho conhecimento no Framework de CSS como tailWind e Sass, em JavaScript tenho conhecimentos de manipulação de DOM, biblioteca React e no back-end com NODEjs.</p>
            <p className={styles.paragrafo}>Estou sempre em busca de conhecimentos, proximos passos é fortalecer o aprendizado em banco de dados com Mysql e aprender mais sobre Devops.</p>
        </PostModelo>
    )
};
