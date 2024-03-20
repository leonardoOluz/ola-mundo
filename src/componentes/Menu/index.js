import { Link } from 'react-router-dom';
import style from './Menu.module.css';

export default function Menu() {
    return (
    <header>
        <nav className={style.navegacao}>
            <Link className={style.link} to='/'>
                inicio
            </Link>
            <Link className={style.link} to='/sobremim'>
                Sobre mim
            </Link>
        </nav>
    </header>
    )
}