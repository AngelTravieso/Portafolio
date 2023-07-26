import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter';
import './index.css';

const AngelWeb = () => {
    return(
        <HashRouter>
            <AppRouter />
        </HashRouter>
    )
}

export default AngelWeb;