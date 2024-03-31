import './Post.css';
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import Markdown from "react-markdown";

export default function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if(!post){
        return(
            <h1>Post não encontrado...</h1>
        )
    }

    return (
        <PostModelo
            fotoCapa={require(`posts/${post.id}/capa.png`)}
            titulo={post.titulo}
        >
            <div className='post-markdown-container'>
                < Markdown>
                    {post.texto}
                </Markdown>
            </div>
        </PostModelo>
    )
};