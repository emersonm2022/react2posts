import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import Home from './home';
import Post from './post';

const Webpages = () => {
    return(
        <BrowserRouter>
	  <Routes>
	    <Route exact path="/" element={<Home />} />
	    <Route path = "/post/:id" element = {<Post />} />
	  </Routes>
	</BrowserRouter>
        
    );
};

export default Webpages;
