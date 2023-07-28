
const date = new Date().getFullYear();

export const Footer = () => {

    return(
        <div className="bg-black-color-1 text-white p-5">
            <div className="container mx-auto text-center">
                <p className="text-dark-grey">Diseñado por <span className="cursor-pointer font-medium decoration-text-gray decoration-2 hover:underline">Angel Travieso</span> <i className="fa-solid fa-laptop-code"></i>
                </p>
                <p>Todos los derechos reservados &copy; { date }</p>
            </div>
        </div>
    )

}