
import { useState } from "react";
import './formulario.css';
import FormEmpanada from "../FormEmpanada";

const Formulario = ({pedidoTot, setPedidoTot}) => {
  const [nombre, setNombre] = useState("");
  const [area, setArea] = useState("");
  const [empanadas, setEmpanadas] = useState([{ gusto: "", cantidad: 1 }]);

  let boton=0;

  const sumarBoton = () => { boton++; }


  const handleEmpanadaChange = (index, nuevaEmpanada) => {
    const nuevasEmpanadas = [...empanadas];
    nuevasEmpanadas[index] = nuevaEmpanada;
    setEmpanadas(nuevasEmpanadas);
  };

  const agregarEmpanada = (e) => {
    e.preventDefault();
    setEmpanadas([...empanadas, { gusto: "", cantidad: 1 }]);
  };


  const agregarPedido = (e) => {
    e.preventDefault();
    const pedidoPersona  = {
      nombre,
      area,
      empanadas,
    };

    setPedidoTot([...pedidoTot, pedidoPersona]);

    // Limpiar el formulario
    setNombre("");
    setArea("");
    setEmpanadas([{ gusto: "", cantidad: 1 }]);
  };


    return (
      <>
    
        <form onSubmit={agregarPedido}>

            <h2>Completá con tu info</h2>

            <label>Nombre completo</label>
            <input type="text" name="nombre" placeholder="Ingresá tu nombre y apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />          
            
            <label>En qué área trabajas</label>
            <select name="selectArea" value={area} onChange={(e) => setArea(e.target.value)} >
                <option value="Sistemas">Sistemas</option>
                <option value="Finanzas" selected>Finanzas</option>
                <option value="Ventas">Ventas</option>
                <option value="RRHH">Recursos Humanos</option>
                <option value="Soporte">Soporte</option>
                <option value="Deposito">Depósito</option>
            </select>
            
            
            <h2>Elegí tus empanadas</h2>

            {empanadas.map((empanada, index) => (
              <FormEmpanada
                key={index}
                index={index}
                gusto={empanada.gusto}
                cantidad={empanada.cantidad}
                onChange={(nuevaEmpanada) =>
                  handleEmpanadaChange(index, nuevaEmpanada)
                }
              />
            ))}


            <button onClick={agregarEmpanada}>Agregar sabor</button>

            
            <button type="submit">Terminar pedido</button>
        </form>
      </>
    );
  };
  
  export default Formulario;