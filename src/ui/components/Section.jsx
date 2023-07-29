export const Section = ({ children, title, subtitle, description }) => {

    return(
        <div className="container mx-auto my-12 p-2 place-content-center">
            <div className="grid grid-cols-2 gap-2">
                <div className="left-side">
                    <p className="text-teal-500 font-medium text-3xl mb-2">{ title }</p>
                    <p className="text-white font-medium text-4xl">{ subtitle }</p>
                </div>
                <div className="right-side flex items-center">
                    <p className="text-white font-medium text-xl">
                        { description }
                    </p>
                </div>
            </div>

            <div className="container mx-auto services grid grid-cols-3 gap-6 m-16">
                { children }
            </div>
        </div>
    )

}