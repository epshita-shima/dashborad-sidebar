import logo from './logo.svg';
import './App.css';
import Dropdown from './pages/Dropdown';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Sidebar></Sidebar>
      </Router>
    </>
  );
}

export default App;
