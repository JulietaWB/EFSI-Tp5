import { useState } from 'react'
import Formulario from './componentes/Formulario'

import './App.css'

function App() {
  const [pedidoTot, setPedidoTot] = useState([])

  return (
    <>
      <h1>HACE TU PEDIDO DE EMPANADAS</h1>

      <div class="form">
        <Formulario pedidoTot={pedidoTot} setPedidoTot={setPedidoTot} />
      </div>

      <h1>PEDIDO FINAL</h1>

      <div class="output"></div>
    </>
  )
}

export default App
