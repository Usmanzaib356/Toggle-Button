import React, { useState } from 'react'
import "./index.css"
function App() {

  const [theme, settheme] = useState(false)

  function toggle() {
    settheme(!theme)
  }

  return (
    <>
      <div className={theme ? 'containerdark' : 'containerlight'}>
        <h1> {theme ? "Dark Theme" : "Light Theme"} </h1>
        <label class="switch">
          <input type="checkbox" class="checkbox" onClick={toggle} />
          <div class="slider"></div>
        </label>
      </div>
    </>
  )
}

export default App;