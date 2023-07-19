import { Link } from 'react-router-dom';
import 'animate.css';

// Navbar
export const Navbar = () => {
    return(
        <div className="bg-slate-50 p-5">
            <div className="flex justify-between items-center">
                {/* Angel Travieso */}
                <div className="nav-word flex flex-col items-center">
                    <p className='text-4xl leading-10 font-medium animate__animated animate__fadeInDown'>Angel Travieso</p>
                    <p className='text-lg italic animate__animated animate__flipInX'>Desarrollador de Software</p>
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