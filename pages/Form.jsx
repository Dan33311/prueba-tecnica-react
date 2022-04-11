import { useState } from "react";
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

/*
- Vista 1: Formulario solicitando la siguiente información
a. Nombre completo {fullName}
b. A que país te gustaría viajar {countryName}
c. Cuando te gustaría viajar (Fecha y Hora), la fecha debe ser superior a
la actual {travelDate}
Información adicional: Una vez enviado el formulario, este debe
redirigir a una vista que se especificara en “Vista 2”
** Para indicar la fecha hora se puede implementar un datetimepicker como una
librería de terceros, no el calendario nativo de HTML5
*/

const Form = () => {
  
  const actualDate = new Date()
  const [travelDate, setTravelDate] = useState()
  const [countryName, setCountryName] = useState("default")
  const [fullName, setFullName] = useState("")

  const handleChangeValue = (event) => {
    setCountryName(event.target.value)
  }
  const handleEditInputChange = (event) => {
    setFullName(event.target.value)
  }

  console.log(">>> countryName:", countryName);
  console.log(">>> actualDate:", actualDate);
  console.log(">>> travelDate:", travelDate);

  return (
    <div className="form">
      <form >

        <h2>Form Title</h2>

        <label className="lb1 d-flex flex-column mb-3" >
          <span className="sp1 text-left text-semi-bold">Full name</span>
          <input
            className="form-control"
            type="text"
            name="fullname" 
            placeholder="your fullname"
            // value={}
            maxLength="60"
            onChange={handleEditInputChange} 
          />

        </label>

        {/* <label>Where are you going?</label> */}
        <div className="country py-3">
          <select className="select-country ps-2 pe-5 py-2 text-secondary rounded" value={countryName} onChange={(event) => handleChangeValue(event)}>
            <option className="" value="default" disabled >Where are you going?</option>
            <option value="peru">Peru</option>
            <option value="argentina">Argentina</option>
            <option value="chile">Chile</option>
            <option value="brasil">Brasil</option>
          </select>
        </div>

        <div className="py-3">
          <DatePicker
            className="select-date pe-4 py-2 text-secondary rounded"
            selected={null || travelDate} 
            onChange={(date) => setTravelDate(date)} 
            minDate={actualDate}
            placeholderText="Travel date"
            // maxDate={startDate.setDate(startDate.getDate()+10)}
          />
        </div>

      </form>
    </div>
  );
}

export default Form;