import './Post.css';
import styles from './Post.module.css';
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import Markdown from "react-markdown";
import NaoEncontrado from 'componentes/NaoEncontrado';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return (
            <NaoEncontrado />
        )
    }

    const postRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => a.id - b.id)
        .slice(0, 4);
    console.log(postRecomendados)

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={require(`posts/${post.id}/capa.png`)}
                titulo={post.titulo}
            >
                <div className='post-markdown-container'>
                    < Markdown>
                        {post.texto}
                    </Markdown>
                </div>
                <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                <ul className={styles.postsRecomendados}>
                    {postRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard key={post.id} post={post}/>
                        </li>
                    ))}
                </ul>
            </PostModelo>

        </PaginaPadrao>
    )
};