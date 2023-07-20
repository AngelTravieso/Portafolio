import { Link } from 'react-router-dom';
import 'animate.css';

// Navbar
export const Navbar = () => {
    return(
        <div className="bg-slate-100 p-5">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="left-side flex items-center">
                    {/* Angel Travieso */}
                    <div className="nav-word flex flex-col items-center pr-2">
                        <p className='text-4xl leading-10 font-medium text-dark-grey animate__animated animate__fadeInDown'>Angel Travieso</p>
                        <p className='text-lg italic text-dark-grey animate__animated animate__flipInX'>Desarrollador de Software</p>
                    </div>
                    <div className="navbar-icons flex justify-between">
                        <div className="icon text-5xl mx-2 text-dark-grey animate__animated animate__fadeIn">
                            {/* Github */}
                            <a href="https://github.com/AngelTravieso" target='_blank'>
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                        <div className="icon text-5xl mx-2 text-dark-grey animate__animated animate__fadeIn">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/angel-gustavo-travieso-castro" target='_blank'>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* NavLinks */}
                <div className="nav-links px-2 animate__animated animate__fadeInRight">
                    {/* Inicio */}
                    <Link to='/inicio'
                    className='link mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Inicio
                    </Link>

                    {/* Sobre mi */}
                    <Link to='/sobre_mi'
                    className='link mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Sobre Mi
                    </Link>

                    {/* Contacto */}
                    <Link to='/contacto'
                    className='link mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Contacto
                    </Link>

                    {/* Servicios */}
                    <Link to='/servicios'
                    className='link mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Servicios
                    </Link>

                </div>
            </div>
        </div>
        
    )
}