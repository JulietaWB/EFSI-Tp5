
import { useState } from "react";
import './formulario.css';

const Formulario = ({pedidoTot, setPedidoTot}) => {
  const [nombre, setNombre] = useState("");
  const [area, setArea] = useState("");
  const [empanadas, setEmpanadas] = useState([]);

  const agregarPedido = (e) => {
    e.preventDefault();
    const pedidoTot = {
      nombre,
      area,
      empanadas,
    };

    setPedidoTot([...pedidoTot, pedidoXpersona]);

    // Limpiar el formulario
    setNombre("");
    setArea("");
    setEmpanadas("");
  };


    return (
      <>
    
        <form onSubmit={agregarPedido}>

            <h2>Completá con tu info</h2>

            <label>Nombre completo</label>
            <input type="text" name="nombre" placeholder="Ingresá tu nombre y apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />          
            
            <label>En qué área trabajas</label>
            <select name="selectArea" onChange={(e) => setArea(e.target.value)} >
                <option value="Sistemas">Sistemas</option>
                <option value="Finanzas" selected>Finanzas</option>
                <option value="Ventas">Ventas</option>
                <option value="RRHH">Recursos Humanos</option>
                <option value="Soporte">Soporte</option>
                <option value="Deposito">Depósito</option>
            </select>
            
            
            <h2>Elegí tus empanadas</h2>


            
            <button type="submit">Terminar pedido</button>
        </form>
      </>
    );
  };
  
  export default Formulario;