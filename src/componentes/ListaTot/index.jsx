const ListaTot = ({ pedidoTot }) => {

    const totales = {};
  
    pedidoTot.forEach(pedido => {
      pedido.empanadas.forEach(empanada => {

        if (totales[empanada.gusto]) {
          totales[empanada.gusto] += empanada.cantidad;

        } else {
          totales[empanada.gusto] = empanada.cantidad;
        }

      });
    });
  
    return (
      <div className="ListaTot">
        <h3>Totales por gusto</h3>
        <ul>
          {Object.entries(totales).map(([gusto, cantidad]) => (
            <li key={gusto}>{gusto}: {cantidad}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListaTot;