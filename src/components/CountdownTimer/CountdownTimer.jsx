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
  const { travelDate, fullName, countryName } = useContext(FormContext)
  
  const timeToTravelInMilliseconds = travelDate

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
      <div className="country-name pb-3">"Hello <span>{fullName.toUpperCase()}</span>"&nbsp; you have</div>
      <div className="countdown-timer">
        <div className="timer">
          <div className="timer-number px-4 pt-2">{remainingTime.days}</div>
          <div className="timer-text pb-4">DAYS</div>
        </div>
        <div className="timer">
          <div className="timer-number px-4 pt-2">{remainingTime.hours}</div>
          <div className="timer-text pb-4">HOURS</div>
        </div>
        <div className="timer">
          <div className="timer-number px-4 pt-2">{remainingTime.minutes}</div>
          <div className="timer-text pb-4">MINUTES</div>
        </div>
        <div className="timer">
          <div className="timer-number px-4 pt-2">{remainingTime.seconds}</div>
          <div className="timer-text pb-4">SECONDS</div>
        </div>
      </div>
      <div className="country-name pt-4">left to start your trip to &nbsp;
        <span>{countryName.toUpperCase()}</span>
      </div>
    </div>
  )
  
}

export default CountdownTimer