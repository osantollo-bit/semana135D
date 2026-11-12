
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dudas from './paginas/Dudas';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import Login from './paginas/Login';
import './App.css'
import Header from './componentes/Header';
import Registro from './paginas/Registro';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Dudas' element={<Dudas/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registro' element={<Registro/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
