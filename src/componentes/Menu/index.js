import MenuLink from '../MenuLink';
import style from './Menu.module.css';

export default function Menu() {


    return (
        <header>
            <nav className={style.navegacao}>
                <MenuLink to={'/'} children={'inicio'} />
                <MenuLink to={'/sobremim'} children={'sobre mim'} />
            </nav>
        </header>
    )
}