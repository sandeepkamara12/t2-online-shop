import React from 'react'

const Countdown = () => {
  return (
    <div className="product-countdown is-countdown" data-until="2019, 11, 2">
      <span className="countdown-row countdown-show4">
        <span className="countdown-section">
          <span className="countdown-amount">00</span>
          <span className="countdown-period">Days</span>
        </span>
        <span className="countdown-section">
          <span className="countdown-amount">00</span>
          <span className="countdown-period">Hours</span>
        </span>
        <span className="countdown-section">
          <span className="countdown-amount">00</span>
          <span className="countdown-period">Minutes</span>
        </span>
        <span className="countdown-section">
          <span className="countdown-amount">00</span>
          <span className="countdown-period">Seconds</span>
        </span>
      </span>
    </div>
  )
}

export default Countdown
