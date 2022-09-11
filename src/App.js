import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className='bg-white h-auto'>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/sidebar' element={<Sidebar></Sidebar>}></Route>
      {/* <Route path='/home' element={<Home></Home>}></Route> */}
    </Routes>
    

    </div>
  );
}

export default App;
