import styles from './PostModelo.module.css';

export default function PostModelo({fotoCapa, titulo, children }) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                style={{backgroundImage: `url(${fotoCapa})`}}
                className={`${styles.fotoCapa}`}
            >
            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
};


