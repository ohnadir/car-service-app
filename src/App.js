import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Experts from './Component/Experts/Experts';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import { createContext } from 'react';
import useServices from './Component/Hooks/useServices';

export const ServiceContext = createContext();
function App() {
  const [services, setServices] = useServices();
  return (
    <div className="App">
      <ServiceContext.Provider value={[services, setServices]}>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/services/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
          <Route path='/experts' element={<Experts></Experts>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          </Routes>
        </ServiceContext.Provider>
    </div>
  );
}

export default App;
