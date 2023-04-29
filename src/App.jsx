import React, { useState,useEffect } from 'react'
import "./index.css"
function App() {

  const [theme, settheme] = useState( localStorage.getItem('theme') === 'dark' ? true : false)

  function toggle() {
    settheme(!theme)
  }



  useEffect(() => {
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);


  return (
    <>
      <div className={theme ? 'containerdark' : 'containerlight'}>
        <h1> {theme ? "Dark Theme" : "Light Theme"} </h1>
        <label class="switch">
          <input type="checkbox" class="checkbox" onClick={toggle} checked={theme} />
          <div class="slider"></div>
        </label>
      </div>
    </>
  )
}

export default App;