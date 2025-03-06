import React from 'react'
import qqImage from '../assets/qq.jpg'
import './ThankYouPage.css'

function ThankYouPage() {
  return (
    <div className="thank-you-container">
      <img src={qqImage} alt="Thank you" className="thank-you-image" />
    </div>
  )
}

export default ThankYouPage