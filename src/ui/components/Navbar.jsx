import { Link } from 'react-router-dom';

// Navbar
export const Navbar = () => {
    return(
        <div className="bg-slate-100 py-5">
            <div className="flex justify-between">
                <div className="site-img">
                    
                </div>
                <div className="nav-links px-2">
                    
                    <Link to='/inicio'
                    className='mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Inicio
                    </Link>

                    <Link to='/sobre_mi'
                    className='mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Sobre Mi
                    </Link>
                    <Link to='/contacto'
                    className='mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Contacto
                    </Link>
                    <Link to='/servicios'
                    className='mx-1 decoration-sky-700 text-xl py-2 px-5 rounded bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium'>
                        Servicios
                    </Link>


                </div>
            </div>
        </div>
    )

}