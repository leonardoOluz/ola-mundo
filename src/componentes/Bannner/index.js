import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Welcome to my web page, sou Leonardo Luz, estudante em Analise de Desenvolvimento de sistema. Tenho 38 anos casado e tenho um filho de 6 anos de idade. Estou me aventurando nessa jornada de programador e aprendendo muito.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='circulo colorido'
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Leonardo happy'
                />
            </div>
        </div>
    )
}
