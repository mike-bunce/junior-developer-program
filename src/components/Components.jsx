import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from './Header';

const Components = () => {
  return (
    <div className="interview">
      <Header />
      <h2>An interview with a React component</h2>
      <p>Mike: So you're a React component, tell me a bit about yourself, what do you do?</p>
      <p className="interviewee">{"<BlockQuickLinks/>"}: yeah, so I'm BlockQuickLinks, I'm a React component, I live in an 
      application called SiteBuilder. I'm very good at telling people where to go. I've been around for 
      a while, pretty much since the creation, ... of SiteBuilder.
      </p>
      <p>Mike: So you've been around for a while eh. What's your background?</p>
      <p className="interviewee">{"<BlockQuickLinks/>"}: I started as a fairly simple component, and then grew and expanded, 
      so that I could handle more layout compositions and give developers, designers and content editors
      more flexibility.</p>
      <p>Mike: so what's life like in the SiteBuilder application?</p>
      <p className="interviewee">{"<BlockQuickLinks/>"}: well, its pretty busy, I have to be in 114 places at once. So that keeps
      me pretty occupied. Also I have four kids</p>
      <p>Mike: oh you have four kids?</p>
      <p className="interviewee">{"<BlockQuickLinks/>"}: yeah my child components are {"<ElementImageLink />"}, {"<ElementImageText />"}, {"<ElementCard />"} and {"<ElementDetailsCard />"},
      they help me with the family business, rendering assorted layouts of images, text and links. Parenting duties aren't too bad though, I share my responsibilities with over 20 other components,
      that's just how us React components are.
      </p>
      <p>Mike: Erm ok. [changes topic quickly] what do you do when you're not working?</p>
      <p className="interviewee">{"<BlockQuickLinks/>"}: when I'm not working, I mostly just watch Netflix and ponder the meaning of life.</p>
      <p>Mike: Interesting... What are you most looking forward to?</p>
      <p className="interviewee">{"<BlockQuickLinks/>"}: I'm mostly looking forward to retirement. I've been superseeded by 
          Layout Grids, which allows you to dynamically create almost any layout, rather than
          building each layout as its own block. So I'm hoping to find a nice cosy server
          to live on, maybe I'll exist just in the archives on a github server somewhere...
      </p>
      <Link to="/lifecycles">Lifecycles</Link>
    </div>
  );
};

export default Components;
