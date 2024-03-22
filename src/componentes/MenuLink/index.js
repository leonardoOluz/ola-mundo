import { Link, useLocation } from 'react-router-dom';
import  style from './MenuLink.module.css'


export default function MenuLink({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link className={`
                ${style.link}
                ${localizacao.pathname === to ? style.linkDestacado : ''}
                `} to={to}>
            {children}
        </Link>
    )

};