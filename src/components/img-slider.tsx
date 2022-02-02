import React, { useState, FC } from "react";
import { Image } from "../types"

import "../scss/img-slider.scss"

interface SliderProps {
  images: Image[],
  directory?: string,
  small?: boolean,
}

function prepSrcSet(srcset: string[], path: string): string | null {
  if (srcset[0].length === 0) {
    return ""
  }
  let width = ""
  let ret: string = ``
  srcset.forEach(source => {
    let theSplit = source.split("-").pop()
    if (theSplit != undefined) {
      width = theSplit.split(".")[0]
    }
    ret.concat(`${path}${source} ${width}, `)
  }) 
  return ret.length > 0 ? ret : null
}

const Slider: FC<SliderProps> = ({ images, directory = null, small = false }): JSX.Element => {
  const [index, setIndex] = useState<number>(0)
  console.log("directory: ", directory)
  console.log('src: ', `/assets/${directory ? `${directory}/` : ``}${images[index].src}`)
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
  let path: string = `/assets/${directory ? `${directory}/` : ``}`
  let sourceSet = null
  let source: string = `${path}${images[index].src}`
  if (Array.isArray(images[index].srcset)) {
    sourceSet = prepSrcSet(images[index].srcset as string[], path)
  }

  return (
    <div className="slider-wrapper">
      <img className={`slider-img${small ? "-small" : ""}`}
        {...sourceSet ? `srcSet=${sourceSet}` : ""}

        src={`${source}`}
        alt={`${images[index].alt}`} />
      <div className={`btns-wrapper${small ? "-small" : ""}`}>
        <button className="slider-btn" onClick={goLeft}><i className="fas fa-chevron-left icon-btn" /></button>
        <div className="dots">
          {images.map((image, i) => <div onClick={() => setIndex(i)} className={`dot ${index === i ? "selected" : ""}`} key={`dot-${i}`}></div>)}
        </div>
        <button className="slider-btn" onClick={goRight}><i className="fas fa-chevron-right icon-btn" /></button>
      </div>

    </div>
  )
}


export default Slider;

