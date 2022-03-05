import logo from './logo.svg';
import './App.css';
import AllBooks from './components/Dashboard/AllBooks/AllBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from './components/Dashboard/AddBooks/AddBooks';
import UpdateBooks from './components/Dashboard/UpdateBooks/UpdateBooks';
import Dashboard from './components/Dashboard/DashBoard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AllBooks />} /> */}
          <Route path="/" element={<Dashboard />} >
          <Route path="/" element={<AllBooks/>} />
          <Route path="/add" element={<AddBooks/>} />
            <Route path="/update/:id" element={<UpdateBooks/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
