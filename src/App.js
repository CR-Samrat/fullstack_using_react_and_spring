import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import ViewUser from './Users/ViewUser';
import EditUser from './Users/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/add" element={<AddUser/>}></Route>
          <Route exact path="/view/:id" element={<ViewUser/>}></Route>
          <Route exact path="/edit/:id" element={<EditUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
