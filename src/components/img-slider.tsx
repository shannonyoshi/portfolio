import React, { useState, FC } from "react";
import { Image } from "../types"

import "../scss/img-slider.scss"

interface SliderProps {
  images: Image[],
  directory?: string,
  small?: boolean,
}

interface imageSrc {
  sources: string,
  medias: string
}

function prepSrcSet(srcset: string[], path: string): imageSrc | null {
  console.log("in prepSrcSet")
  console.log(`srcset`, srcset)
  if (srcset[0].length === 0) {
    console.log(`returning null`)
    return null
  }
  let width = ""
  let ret: imageSrc = { sources: "", medias: "" }

  srcset.forEach((source, i, srcset) => {
    let theSplit = source.split("-").pop()
    if (theSplit !== undefined) {
      width = theSplit.split(".")[0]
      console.log(`width`, width)
    }
    if (i === srcset.length - 1) {
      console.log(`last source`, source)
      ret.sources = ret.sources.concat(`${path}${source} ${width}`)
      ret.medias = ret.medias.concat(`${width}`)

    } else {
      console.log(`inside else`)
      ret.sources = ret.sources.concat(`${path}${source} ${width}, `)
      ret.medias = ret.medias.concat(`(max-width: ${width}) ${width}, `)
      console.log(`ret(added 1)`, ret["sources"])
    }
  })
  console.log(`ret`, ret)
  return ret.sources.length > 0 ? ret : null
}

const Slider: FC<SliderProps> = ({ images, directory = null, small = false }): JSX.Element => {
  const [index, setIndex] = useState<number>(0)
  // console.log("directory: ", directory)
  // consol e.log('src: ', `/assets/${directory ? `${directory}/` : ``}${images[index].src}`)
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
  let imgInfo: imageSrc | null = null
  let source: string = `${path}${images[index].src}`
  if (Array.isArray(images[index].srcset)) {
    imgInfo = prepSrcSet(images[index].srcset as string[], path)
    console.log(`imgInfo`, imgInfo)
  }

  return (
    <div className="slider-wrapper">
      <img className={`slider-img${small ? "-small" : ""}`}
        // {imgInfo!==null ? `srcSet=${imgInfo.sources} sizes=${imgInfo.medias}` : ""}
        srcSet={imgInfo !== null ? `${imgInfo.sources}` : ""}
        sizes={imgInfo !== null ? `${imgInfo.medias}` : ""}
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

