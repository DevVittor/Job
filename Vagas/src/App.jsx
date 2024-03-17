import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";
import Planos from "./pages/Planos";
import Sobre from "./pages/Sobre";
import Acessar from "./pages/Acessar";
import Register from "./pages/Register";
import Anunciar from "./pages/Anunciar";
import PageFound from "./pages/PageFound";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Inicio/>}/>
          <Route path="planos" element={<Planos/>}/>
          <Route path="sobre" element={<Sobre/>}/>
          <Route path="acessar" element={<Acessar/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="anunciar" element={<Anunciar/>}/>
          <Route path="*" element={<PageFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);