import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


/*
  This is the Main page, which will be filled in with one of the following pages, based on the URL (path)...
  To add a new page, first create a new file with the same format as the other pages, then import the default component below.
  Lastly, copy and paste a <Route> div, changing the path to whatever you want and the element to the component you imported.
*/

import Home from './Home';
import History from './History';
import Members from './Members';
import Donate from './Donate';
import Callout from './Callout';
import Outreach from './Outreach';


function Main() {
  //variable that represents the current location in the react router
  const location = useLocation();
  
  /*
    useEffect sets up a function that listens for a certain change. This function listens for changes in the 
    location variable (specified in the array at the end of the function), and calls the function inside when it changes.
  */
  useEffect(() => {
    /*
      extracts the pathname from location, assigning it to the variable pathname
      basically the same thing as doing "const pathname = location.pathname;"
    */
    const { pathname } = location;
    console.log("Pathname: ", pathname);
    // Update document title based on the current route
    if (pathname === '/') {
      document.title = 'Boilermaker Rube Goldberg';
    } else if (pathname === '/history') {
      document.title = 'History';
    }else if (pathname === '/members') {
      document.title = 'Our Team';
    }else if (pathname === '/outreach') {
      document.title = 'Outreach';
    }else if (pathname === '/donate') {
      document.title = 'Support Us';
    }else if (pathname === '/callout') {
      document.title = 'Join Our Team';
    }
  }, [location]);


  return (
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/history' element={<History />}></Route>
        <Route exact path='/members' element={<Members />}></Route>
        <Route exact path='/donate' element={<Donate />}></Route>
        <Route exact path='/callout' element={<Callout />}></Route>
        <Route exact path='/outreach' element={<Outreach />}></Route>
      </Routes>

  );
}

export default Main;