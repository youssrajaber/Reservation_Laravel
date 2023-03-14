import logo from './logo.svg';
import './App.css';
import Nav from './Comps/nav';
import Landing from './Comps/hero';
import Sign from './Comps/signin';
import Resrvation from './Comps/resrvation';
import { Routes,Route,Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/Landing' element={<Landing/>}>home</Route>
        <Route path='/Sign' element={<Sign/>}></Route>
        <Route path='/Res' element={<Resrvation/>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
