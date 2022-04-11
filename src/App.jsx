import './App.css'
import FormComponent from './components/FormComponent'
import { FormProvider } from './context/FormContext'

/* DONE
- Vista 1: Formulario solicitando la siguiente información
a. Nombre completo {fullName}
b. A que país te gustaría viajar {countryName}
c. Cuando te gustaría viajar (Fecha y Hora), la fecha debe ser superior a
la actual {travelDate}
Información adicional: Una vez enviado el formulario, este debe
redirigir a una vista que se especificara en “Vista 2”
*/

const App = () => {
  

  return (
    <div className="App">
      <FormProvider>
        <FormComponent/>
      </FormProvider>
    </div>
  )
}

export default App
