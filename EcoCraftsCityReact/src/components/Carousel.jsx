import React, {useState} from 'react'
import { AccordionImage, Slider, AccordionContainer } from '../styled-components-css/styles.accordion'
import "../page-css/accordion.css"

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;



  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  if(!Array.isArray(slides) || slides.length === 0 ) {
    return null
  }

  return (
    <Slider>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {slides.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && <AccordionImage src={slide.image}/>}
                
                </div>
            )
        })}
    </Slider>
  )
}

export default Carousel