import { Link } from 'react-router-dom';

export const Navbar = () => {

    return(
        <>
            <Link to='/inicio'>Inicio</Link>
            <Link to='/sobre_mi'>Sobre Mi</Link>
            <Link to='/servicios'>Servicios</Link>
            <Link to='/contacto'>Contacto</Link>
        </>
    )

}