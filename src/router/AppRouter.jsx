import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, ServicesPage } from '../ui/pages';
import { Navbar } from '../ui/components/NavBar';

export const AppRouter = () => {
 
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/inicio' element={<HomePage />} />
                <Route path='/sobre_mi' element={<AboutPage />} />
                <Route path='/servicios' element={<ServicesPage />} />
                <Route path='/contacto' element={<ContactPage />} />

                <Route path='/*' element={ <Navigate to='/inicio' /> } />
            </Routes>
        </>
    )

}