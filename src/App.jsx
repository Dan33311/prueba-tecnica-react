import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FormProvider } from './context/FormContext'
import FormComponent from './components/FormComponent'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import About from './components/About'


/* TODO: 
- Información adicional: Una vez enviado el formulario, este debe
redirigir a una vista que se especificara en “Vista 2”
- Vista 2: Se debe mostrar un mensaje de bienvenida que diga “Hola
{fullName}” te quedan # Dias # Horas # Minutos # Segundos para iniciar tu
viaje a {countryName}, el contador se debe actualizar cada segundo.
Información adicional: Una vez se termine el conteo debe redirigir a la vista
especificada en “Vista 3”
*/

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path='/' element={<FormComponent/>} />
            <Route path='/countdown' element={<CountdownTimer/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </div>
  )
}

export default App


/* DONE
- Vista 1: Formulario solicitando la siguiente información
a. Nombre completo {fullName}
b. A que país te gustaría viajar {countryName}
c. Cuando te gustaría viajar (Fecha y Hora), la fecha debe ser superior a
la actual {travelDate}
*/