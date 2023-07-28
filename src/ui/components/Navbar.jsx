import angelImg from "../../assets/angel.png";

export const Navbar = () => {
    return(
        <>
            <nav className="container mx-auto bg-white-300 h-28 flex justify-evenly items-center">
                {/*  */}
                <div className="brand">
                    <a href="/">
                        <img src={ angelImg } alt="Logo imágen" className="w-40" />
                    </a>
                </div>
                {/* Links */}
                <div className="nav-links">
                    <ul className="list-none flex items-center">
                        <li className="mx-4">
                            <a href="#" className="text-white font-medium text-xl hover:text-teal-500 transition ease-in-out duration-300">Inicio</a>
                        </li>
                        <li className="mx-4">
                            <a href="#" className="text-white font-medium text-xl hover:text-teal-500 transition ease-in-out duration-300">Sobre mi</a>
                        </li>
                        <li className="mx-4">
                            <a href="#" className="text-white font-medium text-xl hover:text-teal-500 transition ease-in-out duration-300">Servicios</a>
                        </li>
                        <li className="mx-4">
                            <a href="#" className="text-white font-medium text-xl hover:text-teal-500 transition ease-in-out duration-300">Portfolio</a>
                        </li>
                        <li className="mx-4">
                            <a href="#" className="text-white font-medium text-xl hover:text-teal-500 transition ease-in-out duration-300">Contacto</a>
                        </li>
                        <li className="mx-4">
                            <button className="bg-teal-500 text-white font-medium text-xl rounded-full hover:text-teal-500 hover:bg-white py-3 px-8 transition ease-in-out duration-300">
                                <i className="fa-solid fa-download mr-2"></i>
                                Descargar CV
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}