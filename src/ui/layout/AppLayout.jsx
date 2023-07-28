import { Navbar, Footer } from "../components";

export const AppLayout = ({ children }) => {
    return(
        <div className="flex flex-col bg-black-color">
            <Navbar />
                <div className="">
                    { children }
                </div>
            <Footer />
        </div>
    )
}