import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/productpage'
import Added from './components/addproductpage'
import Update from './components/updatepage'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='addproductpage/' element={<Added />}></Route>
          <Route path='updatepage/:id' element={<Update />}></Route>
          <Route path='imagepage/:id' element={<Image />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
