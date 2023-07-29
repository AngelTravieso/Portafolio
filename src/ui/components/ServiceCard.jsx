export const ServiceCard = ({ info }) => {
    return(
        <div className="bg-black-color-1 rounded text-white hover:-translate-y-4 transition ease-out duration-500 hover:shadow-stone-700 shadow-md animate__animated animate__fadeIn">
            <div className="p-8">
                <div className="icon rounded-full w-24 h-24 mb-4 bg-teal-500 flex justify-center items-center">
                    <i className={`${info.icon} text-4xl`}></i>
                </div>
                <p className="text-2xl font-medium mb-4">{ info.title }</p>
                <p className="mb-4">{ info.description }</p>
                
                <div className="read-more-btn">
                    <i className="fa-solid fa-square text-teal-500 text-sm mr-2"></i>
                    <button href={info.readMoreLink} className="text-teal-400 font-medium  hover:text-white transition ease-in-out duration-300">
                        Leer más
                    </button>
                </div>
            </div>
        </div>
    )
}