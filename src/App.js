import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Dogs from './Component/Dogs/Dogs';
import Bones from './Component/Bones/Bones';
import Settings from './Component/Settings/Settings';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dogs' element={<Dogs></Dogs>}></Route>
        <Route path='/bones' element={<Bones></Bones>}></Route>
        <Route path='/settings' element={<Settings></Settings>}></Route>
      </Routes>
    </div>
  );
}

export default App;
