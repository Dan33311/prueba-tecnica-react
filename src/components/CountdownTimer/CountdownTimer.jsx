import {useState, useEffect, useContext} from 'react'
import FormContext from '../../context/FormContext'
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils'


const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
  // const { travelDate, fullName, countryName } = useContext(FormContext)
  const { storedValue } = useContext(FormContext)

  // const timeToTravelInMilliseconds = travelDate.getTime()
  const timeToTravelInMilliseconds = storedValue.traveldate.getTime()

  console.log(" >>> timeToTravelInMilliseconds:", timeToTravelInMilliseconds)

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
      <span>{`“Hello ${storedValue.fullname}” you have`}</span>
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
      <span>{`left to start your trip to ${storedValue.countryname.charAt(0).toUpperCase() + storedValue.countryname.slice(1)}.`}</span>
    </div>
  )
}

export default CountdownTimer