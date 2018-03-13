'use strict';

const CountdownTimer = (props) => {
  const dayString = Math.max(0, props.days);
  const hourString = Math.max(0, props.hours);
  const minuteString = Math.max(0, props.minutes);

  return (
    <span className="banner-timer-wrap">
      {props.days > 0 && (
        <span>
          <span className="banner-time">{dayString}</span> days
        </span>
      )}
      <span className="banner-time">{hourString}</span> hrs
      {props.days <= 0 && (
        <span>
          <span className="banner-time">{minuteString}</span> mins
        </span>
      )}
    </span>
  );
};

export default CountdownTimer;
