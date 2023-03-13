import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Info from "./components/info";
import About from "./components/about";
import Interest from "./components/interest";
import Footer from "./components/footer";

function App() {

  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default App
