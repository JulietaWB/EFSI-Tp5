import { useState } from 'react'
import Formulario from './componentes/Formulario'
import ListaTot from './componentes/ListaTot'
import ListaPersona from './componentes/ListaPersona'


import './App.css'

function App() {
  const [pedidoTot, setPedidoTot] = useState([])
  

  return (
    <>
      <h1>HACE TU PEDIDO DE EMPANADAS</h1>

      <div className="form">
        <Formulario pedidoTot={pedidoTot} setPedidoTot={setPedidoTot} />
      </div>

      <h1>PEDIDO FINAL</h1>

      <div className="output">
        <ListaTot pedidoTot={pedidoTot} />
        <ListaPersona pedidoTot={pedidoTot} />
      </div>
    </>
  )
}

export default App
