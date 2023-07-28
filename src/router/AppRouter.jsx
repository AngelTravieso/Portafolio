import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../ui/pages';


export const AppRouter = () => {
 
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/inicio' element={<HomePage />} />
            <Route path='/*' element={ <Navigate to='/inicio' /> } />
        </Routes>
    )

}