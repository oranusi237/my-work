import React from 'react'
import {useEffect, useState } from 'react';
import {FaSun, FaMoon} from 'react-icons/fa'


const Header = () => {
  const [theme, setTheme] = useState(false);
  const toggledarkmode = () => {
    if (theme === 'light') {
      setTheme('dark');
    }  else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <header className='header'>
        <div>
          <h2>Where in the world?</h2>
        </div>

        <div className='switch'>
         <button onChange={toggledarkmode}></button>
         <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>  
        </div>
      </header>
    </div>
  )
}


export default Header