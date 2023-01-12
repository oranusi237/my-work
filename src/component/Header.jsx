import React from 'react'
import { useState } from 'react';


const Header = () => {
  const [mode, setmode] = useState(true);
  const [togglebtn, setToggleBtn] = useState('<i class="fa-solid fa-sun"></i> Dark Mode')
   const toggleDarkmode = () => {
     if(mode) {
       document.documentElement.classList.add('dark')
       setToggleBtn('<i class="fa-solid fa-moon"></i> Dark Mode')
       setmode(current => current = !current)
     }
     if(!mode) {
        document.documentElement.classList.remove('dark')
        setToggleBtn('<i class="fa-solid fa-sun"></i> Light Mode')
        setmode(current => current = !current)
     }
  };
  return (
    <div>
      <header className='header'>
        <div>
          <h2>Where in the world?</h2>
        </div>
        <div className='switch'>
         {/* <button  dangerouslySetInnerHTML = {{__html: togglebtn}} type={'button'} id={'btn'} className='btn' >
          <div className='circle'>
            <span className='dark'><i class="fa-solid fa-moon"></i></span>
            <span className='light'><i class="fa-solid fa-sun"></i></span>
          </div>
          </button>  */}
         
        </div>
      </header>
    </div>
  )
}


export default Header