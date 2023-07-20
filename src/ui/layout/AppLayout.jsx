import { Footer } from "../components"
import { Navbar } from "../components/Navbar"

export const AppLayout = ({ children }) => {
    return(
        <div className="flex flex-col">
            <Navbar />
                <div className="container mx-auto h-screen ">
                    { children }
                </div>
            <Footer />
        </div>
    )
}