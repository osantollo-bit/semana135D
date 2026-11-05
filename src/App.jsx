
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dudas from './paginas/Dudas';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import './App.css'
import Header from './componentes/Header';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Dudas' element={<Dudas/>}/>
        <Route path='/Productos' element={<Productos/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
