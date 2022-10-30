import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,Miembros,Servers,Admin,Tienda, Apoyanos} from './components/Main'
import Header from './components/Headers/Header'

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <div>
      
      </div>
      <Header/>
      </div>
    <Routes>
      <Route path="/" element={ <Home />}></Route>
      <Route path="/Miembros" element={ <Miembros />}></Route>
      <Route path="/Servers" element={ <Servers />}></Route>
      <Route path="/Apoyanos" element={ <Apoyanos />}></Route>
      <Route path="/Tienda" element={ <Tienda />}></Route>
      <Route path="/Admin" element={ <Admin />}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
