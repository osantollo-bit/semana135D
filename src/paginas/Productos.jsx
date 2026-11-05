import Tarjeta from "../componentes/Tarjeta";
import { useState } from "react";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";


function Productos(){

    const [mostrar, setMostrar] = useState(false)
    
    function mostrarMensaje(){
        setMostrar(true)
    }
    
    function cerrarMensaje(){
        setMostrar(false)
    }
    
    return(
        <main>
            <h1>Productos</h1>
            <div className="contenedor">

                <Tarjeta
                imagen="/Img/ham"
                titulo="Hamburguesa"
                descripcion="Incluye papas y refresco"
            >
                <Boton funcion={mostrarMensaje}>Abrir modal</Boton>
            </Tarjeta>

            <Tarjeta
                imagen="/Img/ham"
                titulo="Hamburguesa"
                descripcion="Incluye papas y refresco"
            >
                <Boton funcion={mostrarMensaje}>Abrir modal</Boton>
            </Tarjeta>

            <Tarjeta
                imagen="/Img/ham"
                titulo="Hamburguesa"
                descripcion="Incluye papas y refresco"
            >
                <Boton funcion={mostrarMensaje}>Abrir modal</Boton>
            </Tarjeta>


            </div>
            
            {mostrar && (
                <Modal>
                    <h2>Listo</h2>
                    <p>Tu mensaje fue enviado</p>
                    <Boton funcion={cerrarMensaje}>Aceptar</Boton>
                </Modal>
            )}



        </main>
        
    )
}

export default Productos;