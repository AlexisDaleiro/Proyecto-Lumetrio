
import "./App.css";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import PortafolioPagina from "./paginas/PortafolioPagina";
import SobreMi from "./paginas/SobreMiPagina";
import Noticias from "./paginas/Noticias";
import Servicios from "./paginas/Servicios";

function App() {
  return (
    <>
  
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portafolio" element={<PortafolioPagina />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/noticias" element={<Noticias/>} />
        <Route path="/servicios" element={<Servicios/>} />
      </Routes>
    </HashRouter>
 
    </>
  );
}

export default App;
