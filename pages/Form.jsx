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
  
  return (
    <div className="form">
      <form >

        <h2>Form Title</h2>

        <label>Full Name</label>
        <input
          name="fullname" 
          type="text"
          placeholder="Full name"
          // value={}
          onChange={""} 
        />

        <label>Country name</label>
        <select>
          <option value="colombia">Colombia</option>
          <option value="peru">Peru</option>
          <option value="argentina">Argentina</option>
          <option value="chile">Chile</option>
          <option value="brasil">Brasil</option>
        </select>

      </form>
    </div>
  );
}

export default Form;