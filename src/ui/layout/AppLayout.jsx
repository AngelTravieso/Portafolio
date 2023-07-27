import { Footer } from "../components"
import { Navbar } from "../components/Navbar"

export const AppLayout = ({ children }) => {
    return(
        <div className="flex flex-col bg-bg-black-color">
            <Navbar />
                <div className="h-screen ">
                    { children }
                </div>
            <Footer />
        </div>
    )
}