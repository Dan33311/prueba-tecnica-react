import {useState, useEffect, useContext} from 'react'
import FormContext from '../../context/FormContext'
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils'


/* TODO: 
- Vista 2: Se debe mostrar un mensaje de bienvenida que diga “Hola
{fullName}” te quedan # Dias # Horas # Minutos # Segundos para iniciar tu
viaje a {countryName}, el contador se debe actualizar cada segundo.
Información adicional: Una vez se termine el conteo debe redirigir a la vista
especificada en “Vista 3”
*/


const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
  const { travelDate, fullName, countryName } = useContext(FormContext)
  const timeToTravelInMilliseconds = travelDate.getTime()

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(timeToTravelInMilliseconds);
    }, 1000)
    return () => clearInterval(intervalId)
  },[timeToTravelInMilliseconds])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return(
    <div className="countdown-timer-container">
      <span>{`“Hello ${fullName}” you have`}</span>
      <div className="countdown-timer">
        <span className="timer-text">{remainingTime.days}</span>
        <span className="me-3">days</span>
        <span className="two-numbers timer-text">{remainingTime.hours}</span>
        <span className="me-3">hours</span>
        <span className="two-numbers timer-text">{remainingTime.minutes}</span>
        <span className="me-3">minutes</span>
        <span className="two-numbers timer-text">{remainingTime.seconds}</span>
        <span className="me-3">seconds</span>
      </div>
      <span>{`left to start your trip to ${countryName.charAt(0).toUpperCase() + countryName.slice(1)}.`}</span>
    </div>
  )
}

export default CountdownTimer