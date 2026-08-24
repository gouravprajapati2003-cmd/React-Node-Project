import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vehicle from './pages/Vehicle';
import VehicleList from './pages/VehicleList';

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Vehicle></Vehicle>}></Route>
            <Route path = '/vehicles' element = {<VehicleList></VehicleList>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;