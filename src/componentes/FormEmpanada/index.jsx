
import { useState } from "react";
import './formEmpanada.css';

const FormEmpanada = ({ index, gusto, cantidad, onChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "gusto") {
          onChange({ gusto: value, cantidad });
          
        } else if (name === "cantidad") {
          // Permitimos que el input funcione normalmente incluso si está vacío
          const valid = value === "" ? "" : parseInt(value);
          onChange({ gusto, cantidad: valid });
        }
      };
    

    return (
        <>
            <div class="formEmpanada">
                <label>Gusto de empanada</label>

                <select name="gusto" value={gusto} onChange={handleChange}>
                    <option value="">Elegí tu gusto</option>
                    <option value="carneSuave">Carne suave</option>
                    <option value="jyq" selected>Jamón y queso</option>
                    <option value="verdura">Verdura</option>
                    <option value="humita">Humita</option>
                    <option value="pollo">Pollo</option>
                    <option value="caprese">Caprese</option>
                </select>

                <label>Cantidad</label>
                <input type="number" name="cantidad" min="1" max="10"  value={cantidad} onChange={handleChange}/>

            </div>

        </>
    );
};



  
  export default FormEmpanada;