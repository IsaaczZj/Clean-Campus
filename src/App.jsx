import { FormUsuario } from "./components/usuario/FormUsuario"
import { LoginUsuario } from "./components/usuario/LoginUsuario"
import PaginaInicial from "./components/PaginaInicial"
import RegistrarOcorrencia from "./components/usuario/RegistrarOcorrencia"
import HomePrestador from "./components/prestador/HomePrestador"
import HomeUsuario from "./components/usuario/HomeUsuario"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { LoginPrestador } from "./components/prestador/LoginPrestador"
import { FormPrestador } from "./components/prestador/FormPrestador"

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<PaginaInicial />} />
          <Route path="/usuario/cadastro" element={<FormUsuario />} />
          <Route path="/usuario/login" element={<LoginUsuario />} />
          <Route path="/usuario/home" element={<HomeUsuario />} />
          <Route path="/usuario/ocorrencia" element={<RegistrarOcorrencia />} />
          <Route path="/prestador/cadastro" element={<FormPrestador />} />
          <Route path="/prestador/login" element={<LoginPrestador />} />
          <Route path="/prestador/home" element={<HomePrestador />} />
          <Route path="/prestador/ocorrencia" element={<RegistrarOcorrencia />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
