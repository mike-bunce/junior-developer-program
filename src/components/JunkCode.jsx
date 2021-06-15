import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';
import $ from 'jquery';
import './slider.css';

const jQueryCode = () => {
    
    (function imageSlider(){
        var totalWidth = 0;
        var slideCount = 0;
        $('li.slideItem').each(function() {
        totalWidth += parseInt($(this).outerWidth(), 10);
        slideCount = slideCount + 1;
        });
    
        slideCount = slideCount / 2;
    
        var speed = 10 * totalWidth;	
        
        var adjustment = (50 / 100) * totalWidth + (slideCount * 5);
        
        $(".slideContainer").animate({marginLeft:-adjustment},speed, 'linear', function(){
                    $(this).css({marginLeft:0}).find("li:last");
            });
        //native to the browser
        requestAnimationFrame(imageSlider);
    })();
}

jQueryCode();

const JunkCode = () => {
  return (
    <div className="inner-page">
        <Header />
        <div>
            <h1>Code to recycle</h1>
            <p>This page contains some functional but "junk" code</p>
            <p>Convert the Jquery and old timey JavaScript to React</p>
            <p>Use React Best Practices.</p>
        </div>
        <div class="slider">
            <ul class="slideContainer">
                <li class="slideItem first-half">
                    <img width="447" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72087132_2371856152933252_3833090850905128960_o-e1601304166123.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                    <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/drone-e1601304383841.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                    <img width="311" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2.jpg" className="attachment-full size-full" alt="" srcset="http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2.jpg 311w, http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2-300x242.jpg 300w" sizes="(max-width: 311px) 100vw, 311px" />
                </li>
                            
                    
                <li className="slideItem first-half">
                    <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72314963_2395710393881161_2283115313593581568_o-e1601304111131.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                    <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513.jpg" className="attachment-full size-full" alt="" srcset="http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513.jpg 377w, http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513-300x200.jpg 300w" sizes="(max-width: 377px) 100vw, 377px" />
                </li>
                            
                    
                <li className="slideItem first-half">
                    <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9869-e1485956877549.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                    <img width="379" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/italyjune17-9-of-41-e1513163684962.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                            <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/106332782_2981556315296563_2840459847104995094_o-e1601304079621.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                            <img width="250" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/19260485_1311428888975989_2986798734128406920_n-e1601304185128.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                            <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/work-6-e1464062807311.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                            <img width="284" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9543-e1485956800830.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                            <img width="261" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9540-e1485956819864.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                            <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_1322-e1464063483287.png" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem first-half">
                            <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9881-e1485956860774.jpg" className="attachment-full size-full" alt="" />
                </li>
                                                    
                    
                <li className="slideItem second-half">
                            <img width="447" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72087132_2371856152933252_3833090850905128960_o-e1601304166123.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/drone-e1601304383841.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="311" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/testimonial2.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/72314963_2395710393881161_2283115313593581568_o-e1601304111131.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/11045421_752992211486329_5106566949685091607_o-e1456726289513.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9869-e1485956877549.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="379" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/italyjune17-9-of-41-e1513163684962.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="251" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/106332782_2981556315296563_2840459847104995094_o-e1601304079621.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="250" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2020/09/19260485_1311428888975989_2986798734128406920_n-e1601304185128.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/work-6-e1464062807311.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="284" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9543-e1485956800830.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="261" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9540-e1485956819864.jpg" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="377" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_1322-e1464063483287.png" className="attachment-full size-full" alt="" />
                </li>
                            
                    
                <li className="slideItem second-half">
                            <img width="335" height="251" src="http://www.rbfilms.uk/wp-content/uploads/2015/12/IMG_9881-e1485956860774.jpg" className="attachment-full size-full" alt="" />
                </li>
            </ul>
        <p><Link to="/CodeChallenge">Previous</Link></p>
      </div>
    </div>
    
  );
};

export default JunkCode;
