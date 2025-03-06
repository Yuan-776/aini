import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import xhwmImage from '../assets/xhwm.png'
import './PreferencePage.css'

function PreferencePage() {
  const navigate = useNavigate()
  const [dislikeSize, setDislikeSize] = useState(100)
  const [likeSize, setLikeSize] = useState(100)
  
  const handleDislike = () => {
    if (dislikeSize > 5) {
      setDislikeSize(prevSize => prevSize * 0.8)
      setLikeSize(prevSize => prevSize * 1.15)
    } else {
      setDislikeSize(0)
      setLikeSize(prevSize => prevSize * 1.5)
    }
  }
  
  const handleLike = () => {
    navigate('/thank-you')
  }
  
  return (
    <div className="preference-container">
      <div className="image-container">
        <img src={xhwmImage} alt="Content" className="main-image" />
      </div>
      <div className="buttons-container">
        <button 
          className="like-button"
          onClick={handleLike}
          style={{ 
            width: `${likeSize}px`, 
            height: `${likeSize * 0.4}px`,
            fontSize: `${Math.min(likeSize * 0.2, 30)}px`
          }}
        >
          喜欢
        </button>
        {dislikeSize > 0 && (
          <button 
            className="dislike-button"
            onClick={handleDislike}
            style={{ 
              width: `${dislikeSize}px`, 
              height: `${dislikeSize * 0.4}px`,
              fontSize: `${Math.min(dislikeSize * 0.2, 30)}px`
            }}
          >
            不喜欢
          </button>
        )}
      </div>
    </div>
  )
}

export default PreferencePage