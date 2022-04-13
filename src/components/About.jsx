import { useContext } from "react";
import FormContext from "../context/FormContext";
import useFetch from "../Hooks/useFetch";


// Vista 3: Aquí se debe visualizar la información relevante del país, como
// imágenes de sitios turísticos, Nombre de la capital, bandera, escudo del país
// y moneda
// Indicaciones adicionales:
// ● Para la vista 3 se deben consumir 2 APIS
// ○ https://restcountries.com para visualizar la info del país
// ○ https://serpapi.com para mostrar las imágenes, ejemplo:
// https://serpapi.com/search.json?q={countryName}+Sites+1
// 024x762&tbm=isch&ijn=0&api_key={developerApiKey}
// ■ Responde imágenes (1024 x 768) de lugares del país
// diligenciado en el formulario en formato JSON
// ■ Registrarse y consultar la documentación
// https://serpapi.com/images-results, aquí mismo
// proporciona el link de consumo con el developerApiKey
// generado

// 5. Emplear solo componentes funcionales y custom hooks
// 6. El {developerApiKey} generado en serapi.com debe ser configurado como
// variable de entorno de la aplicación.
// 7. Se recomienda usar vite.js en lugar de react-create-app (Opcional)
// 8. La app debe ser responsive, visualizarse correctamente en smartphone y
// desktop

// Criterios de aceptación
// 1. Si se está la vista 1, no se debe permitir acceder a la vista 2 y 3, forzar
// redirección a la vista 1
// 2. Si el cliente refresca completamente la web app se debe persistir la
// información del formulario en local storage o en session storage con el fin de
// no perder el conteo del reloj y la consulta a las apis
// 3. En la vista 2, si el cliente refresca la página y el conteo no ha terminado, el
// reloj debe reanudarse donde estaba anteriormente.
// 4. En la vista 2, si el cliente refresca la página con el conteo ya terminado, se
// debe mostrar únicamente la vista 3, sin permitir el acceso a las vistas 1 y 2.
// 5. En la vista 3 se debe poner un botón que permita volver al inicio de todo el
// proceso, es decir a la vista 1. (Borrar sesión o local storage)




const About = () => {

  const {
    travelDate,
    setTravelDate,
    countryName,
    setCountryName,
    fullName,
    setFullName
  } = useContext(FormContext)

  const { data: info, isPending, error } = useFetch(`https://restcountries.com/v3.1/name/${countryName}`)

  // console.log(" >>> isPending:", isPending);
  console.log(" >>> info:", info);
  // console.log(" >>> info[0].name.common:", info[0].name.common);
  // console.log(" >>> error", error);
  console.log(" >>> fullName:", fullName)
  console.log(" >>> countryName:", countryName)

  return (
    
    <>
      { error && <div>{ error }</div>}

      { info && isPending === false 
        ? 
          <div className="about">
            <h1>Interesting Facts</h1>
            <h1>{info[0].name.common}</h1>
            <img src={info[0].flags.png} alt="" />
            <p><span>Population: </span>{info[0].population.toLocaleString()}</p>
            <p><span>Capital: </span>{info[0].capital}</p>
            <p><span>Region: </span>{info[0].subregion}</p>
            {info[0].languages.spa ? <p><span>Language: </span>{info[0].languages.spa}</p> : <p><span>Language: </span>{info[0].languages.por}</p>}
            {info[0].currencies.COP && <p><span>Currency: </span>{info[0].currencies.COP.name}</p> }
            {info[0].currencies.PEN && <p><span>Currency: </span>{info[0].currencies.PEN.name}</p> }
            {info[0].currencies.ARS && <p><span>Currency: </span>{info[0].currencies.ARS.name}</p> }
            {info[0].currencies.BRL && <p><span>Currency: </span>{info[0].currencies.BRL.name}</p> }
            <p><span>Time Zone: </span>{info[0].timezones}</p>
          </div>
        : 
          <h1>Loading ...</h1> 
      }
    </>

  )
}

export default About;


// {info.map((country) => {
//   const { capital, startOfWeek } = country

//   return 
//     <div className="about">
//     <h1>{capital}</h1>
//     <h1>{startOfWeek}</h1>
//     {/* <h1>About {info[0].name.common}</h1> */}
//   </div>
// })}