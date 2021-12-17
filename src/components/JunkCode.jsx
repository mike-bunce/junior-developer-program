import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Header from './Header';

const Slider = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 251px;
`

const movement = (endingPoint) => keyframes`
  0% { margin-left: 0px; }
  100% { margin-left: -${endingPoint}px; }
`
const AnimatedSlides = styled.ul`
  width: 10000px;
  overflow: hidden;
  left: 0;
  padding: 0;
  margin: 0;
  li:first-child {
    animation: ${props => movement(props.endingPoint)} 30s linear infinite;
  }
  li {
    display: inline-block;
    img {
      display: inline-block;
    }
  }
`
const Page = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
`

const JunkCode = () => {

    const slides = useRef(null)
    const [firstSlideWidth, setFirstSlideWidth] = useState(null)
    const imageSrcs = [
        'http://www.rbfilms.uk/wp-content/uploads/2020/09/72087132_2371856152933252_3833090850905128960_o-e1601304166123.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2020/09/drone-e1601304383841.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2020/09/72314963_2395710393881161_2283115313593581568_o-e1601304111131.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9869-e1485956877549.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/italyjune17-9-of-41-e1513163684962.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2020/09/106332782_2981556315296563_2840459847104995094_o-e1601304079621.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2020/09/19260485_1311428888975989_2986798734128406920_n-e1601304185128.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/work-6-e1464062807311.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9543-e1485956800830.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9540-e1485956819864.jpg',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_1322-e1464063483287.png',
        'http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9881-e1485956860774.jpg'
    
    ]

    const imageSlide = (alternate) => {
        return imageSrcs.map((imageSrc, i) => {  
          if(i === 0) {
            return (
                <li key={`${imageSrc}${i}${alternate}`} height="251" className="slideItem">
                    <img onLoad={onImgLoad} src={imageSrc} alt="Placeholder alt text" />
                </li>
            )
          }
          return (
            <li key={`${imageSrc}${i}${alternate}`} height="251" className="slideItem">
                <img src={imageSrc} alt="Placeholder alt text" />
            </li>
        )
        })
    }

    const [endingPoint, setEndingPoint] = useState('0');

    const onImgLoad = ({ target: img }) => {
      const { offsetWidth } = img;
      setFirstSlideWidth(offsetWidth)
    };

    useEffect(() => {
        if(firstSlideWidth !== null) {
          const totalSlideWidth = slides && slides.current && slides.current.offsetWidth
          const endAt = (totalSlideWidth/2 - firstSlideWidth)
          setEndingPoint(endAt)
        }
      }, [slides, endingPoint, firstSlideWidth])
  
  return (
    <Page>
        <Header />
        <div>
            <h1>Solved!</h1>
            <p>Take a look at the code in this file, and you'll see how I solved this by removing 
                the JQuery and moving the animation logic to CSS (in Styled Components)
            </p>
        </div>
        <Slider>
            <AnimatedSlides ref={slides} endingPoint={endingPoint} className="slideContainer">
                {imageSlide('first')}
                {imageSlide('second')}
            </AnimatedSlides>
      </Slider>
      <p><Link to="/CodeChallenge">Previous</Link></p>
    </Page>
    
  );
};

export default JunkCode;

// Old code

// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import Header from './Header';
// // import $ from 'jquery';
// import './slider.css';

// const jQueryCode = () => {
    
//     (function imageSlider(){
//         var totalWidth = 0;
//         var slideCount = 0;
//         $('li.slideItem').each(function() {
//         totalWidth += parseInt($(this).outerWidth(), 10);
//         slideCount = slideCount + 1;
//         });
    
//         slideCount = slideCount / 2;
    
//         var speed = 10 * totalWidth;	
        
//         var adjustment = (50 / 100) * totalWidth + (slideCount * 5);
        
//         $(".slideContainer").animate({marginLeft:-adjustment},speed, 'linear', function(){
//                     $(this).css({marginLeft:0}).find("li:last");
//             });
//         //native to the browser
//         requestAnimationFrame(imageSlider);
//     })();
// }

// jQueryCode();

// const JunkCode = () => {
//   return (
//     <div className="inner-page">
//         <Header />
//         <div>
//             <h1>Code to recycle</h1>
//             <p>This page contains some functional but "junk" code</p>
//             <p>Convert the Jquery and old timey JavaScript to React</p>
//             <p>Use React Best Practices.</p>
//         </div>
//         <div class="slider">
//             <ul class="slideContainer">
//                 <li class="slideItem first-half">
//                     <img width="447" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72087132_2371856152933252_3833090850905128960_o-e1601304166123.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                     <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/drone-e1601304383841.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                     <img width="311" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2.jpg" className="attachment-full size-full" alt="" srcset="http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2.jpg 311w, http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2-300x242.jpg 300w" sizes="(max-width: 311px) 100vw, 311px" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                     <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72314963_2395710393881161_2283115313593581568_o-e1601304111131.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                     <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513.jpg" className="attachment-full size-full" alt="" srcset="http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513.jpg 377w, http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513-300x200.jpg 300w" sizes="(max-width: 377px) 100vw, 377px" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                     <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9869-e1485956877549.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                     <img width="379" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/italyjune17-9-of-41-e1513163684962.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                             <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/106332782_2981556315296563_2840459847104995094_o-e1601304079621.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                             <img width="250" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/19260485_1311428888975989_2986798734128406920_n-e1601304185128.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                             <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/work-6-e1464062807311.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                             <img width="284" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9543-e1485956800830.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                             <img width="261" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9540-e1485956819864.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                             <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_1322-e1464063483287.png" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem first-half">
//                             <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9881-e1485956860774.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                                                    
                    
//                 <li className="slideItem second-half">
//                             <img width="447" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72087132_2371856152933252_3833090850905128960_o-e1601304166123.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/drone-e1601304383841.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="311" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72314963_2395710393881161_2283115313593581568_o-e1601304111131.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9869-e1485956877549.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="379" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/italyjune17-9-of-41-e1513163684962.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/106332782_2981556315296563_2840459847104995094_o-e1601304079621.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="250" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/19260485_1311428888975989_2986798734128406920_n-e1601304185128.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/work-6-e1464062807311.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="284" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9543-e1485956800830.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="261" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9540-e1485956819864.jpg" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_1322-e1464063483287.png" className="attachment-full size-full" alt="" />
//                 </li>
                            
                    
//                 <li className="slideItem second-half">
//                             <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9881-e1485956860774.jpg" className="attachment-full size-full" alt="" />
//                 </li>
//             </ul>
//         <p><Link to="/CodeChallenge">Previous</Link></p>
//       </div>
//     </div>
    
//   );
// };

// export default JunkCode;
