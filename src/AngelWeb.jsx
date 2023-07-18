import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter';
import './index.css';

const AngelWeb = () => {
    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default AngelWeb;