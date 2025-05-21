import './ListaPersona.css';

const ListaPersona = ({ pedidoTot }) => (

    <div class="listaPersona">
      <h3>Pedidos por persona</h3>

      {pedidoTot.map((pedido, index) => (

        <div key={index}>
          <strong>{pedido.nombre}</strong> ({pedido.area})
          <ul>
            {pedido.empanadas.map((emp, i) => (
              <li key={i}>{emp.gusto}: {emp.cantidad}</li>
            ))}
          </ul>
        </div>
        
      ))}
    </div>
  );
  
  export default ListaPersona;