import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter';

const AngelWeb = () => {
    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default AngelWeb;