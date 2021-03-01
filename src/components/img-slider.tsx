import React, { useState, FC } from "react";
import { Image } from "../types"

import "../scss/img-slider.scss"

interface SliderProps {
  images: Image[]
}

const Slider: FC<SliderProps> = ({ images }): JSX.Element => {
  const [index, setIndex] = useState<number>(0)

  const goLeft = (): void => {
    if (index === 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const goRight = (): void => {
    if (index === (images.length - 1)) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="slider-wrapper">
      <img className="slider-img" src={`/assets/${images[index].src}`} alt={`${images[index].alt}`} />
      <div className="btns-wrapper">
        <button className="slider-btn" onClick={goLeft}><i className="fas fa-chevron-left icon-btn" /></button>
        <div className="dots">
          {images.map((image, i) => <div onClick={() => setIndex(i)} className={`dot ${index === i ? "selected" : ""}`}></div>)}
        </div>
        <button className="slider-btn" onClick={goRight}><i className="fas fa-chevron-right icon-btn" /></button>
      </div>

    </div>
  )
}


export default Slider;