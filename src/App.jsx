import { useState } from 'react'
import Menu from './Components/Menu';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css"

function App() {
  const [theme,setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div className={theme}>
        <button className={theme === "dark" ? "btn btn-light" : "btn btn-dark"} onClick = {toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
        <div>
          <Menu />
        </div>
      </div>
    </>
  )
} 

export default App
