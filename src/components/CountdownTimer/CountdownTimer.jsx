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
      <div className="c-name pb-3">"Hello <span>{storedValue.fullname}</span>"&nbsp; you have</div>
      <div className="countdown-timer">
        <div className="">
          <div className="timer-text px-4 pt-2">{remainingTime.days}</div>
          <div className="pb-4">DAYS</div>
        </div>
        <div className="">
          <div className="timer-text px-4 pt-2">{remainingTime.hours}</div>
          <div className="pb-4">HOURS</div>
        </div>
        <div className="">
          <div className="timer-text px-4 pt-2">{remainingTime.minutes}</div>
          <div className="pb-4">MINUTES</div>
        </div>
        <div className="">
          <div className="timer-text px-4 pt-2">{remainingTime.seconds}</div>
          <div className="pb-4">SECONDS</div>
        </div>
      </div>
      <div className="c-name pt-3">left to start your trip to &nbsp;<span>{storedValue.countryname.charAt(0).toUpperCase() + storedValue.countryname.slice(1)}.</span></div>
    </div>
  )
}

export default CountdownTimer