import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Dashboard } from './pages/dashboard/Dashboard';
import Bugedit from './pages/bugedit/Bugedit';
import Staff from './pages/staff/Staff'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path = "/bugedit" element = {<Bugedit/>} />
        <Route path='/staff' element={<Staff/>} />
      </Routes>
    </div>
  );
}

export default App;
