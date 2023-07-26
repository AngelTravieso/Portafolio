import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, ServicesPage } from '../ui/pages';


export const AppRouter = () => {
 
    return (
        <div className="bg-slate-50">
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/inicio' element={<HomePage />} />
                <Route exact path='/sobre_mi' element={<AboutPage />} />
                <Route exact path='/servicios' element={<ServicesPage />} />
                <Route exact path='/contacto' element={<ContactPage />} />

                <Route path='/*' element={ <Navigate to='/inicio' /> } />
            </Routes>
        </div>
    )

}