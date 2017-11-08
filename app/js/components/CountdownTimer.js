'use strict'

const CountdownTimer = (props) => {

  const dayString = props.days
  const hourString = props.hours

  return (
    <span className="banner-timer-wrap">
      <span className="banner-time">{dayString}</span> days 
      <span className="banner-time">{hourString}</span> hrs
    </span>
  )
}

export default CountdownTimer
