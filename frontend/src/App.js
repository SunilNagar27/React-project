import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/privateComponenet';
import Login from './components/Login';
import Home from './components/home';

/* 
The header we created which is Nav.js which is been used in app.js must be inside the browser routed to run perfectly 

{ BrowserRouter ,Routes,Route} 
Here the BrowserRouter is Tag/function under which Our all the headers which include Link tag must be under this tag <BrowserRouter></BrowserRouter>

Routes are used to specifies number of routes our Page contanis 

Route contains the path of the path at which the link is targetting or basically the URL at which Link we redirect 
and,
Also Contain elememt which will contain components which will be displayed on that particular route

*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>List Product componnent </h1>} />
            <Route path="/add" element={<h1>Add Product componnent </h1>} />
            <Route path="/update" element={<h1>Update Product componnent </h1>} />
            <Route path="/logout" element={<h1>Logout componnent </h1>} />
            <Route path="/profile" element={<h1>Profile componnent </h1>} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
