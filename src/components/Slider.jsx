import React, { useState } from 'react'
import Style from '../css/Slider.module.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.avif'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'

const Slider = () => {

    let [image, setImage] = useState([banner1, banner2, banner3, banner4, banner5]);

    let [count, setCount] = useState(0);

    console.log(image);

    function leftSlide() {
        if (count == 0) {
            count = 4
        }
        else {
            setCount(count-=1)
        }
        
    }
    function RightSlide() {
         if (count == 4) {
            count = 0
        }
        else {
            setCount(count+=1)
        }
    }

  return (
      <>
          
          <section className={Style.section}>
              <button className={Style.btnL} onClick={leftSlide}>
                  <CircleArrowLeft style={{color:"white"}} size={38}/>
              </button>
              
              <button className={Style.btnR} onClick={RightSlide}>
                  <CircleArrowRight style={{color:"white"}} size={38}/>
              </button>
              <div>
                  <img src={image[count]} alt="" width="100%" height="450px"/>
              </div>
          </section>
    </>
  )
}
export default Slider