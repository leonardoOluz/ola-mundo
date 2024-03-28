import styles from './Rodape.module.css';
import {ReactComponent as MarcasRegistrada } from 'assets/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            < MarcasRegistrada />
            Desenvolvido por Leonardo Luz
        </footer>
    )
};

