
import React from 'react'
import Aptutorial from './Aptutorial'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Products  from './Products'
import { useState } from 'react'


function App() {

  const [ProductsData, setProductsData] = useState([]);
  return(
    
    <>
    <BrowserRouter>
      <Routes>   
        <Route>
              <Route path='/' element={<Aptutorial setlun={setProductsData}/>}/>
              <Route path='/Products' element={<Products setfun={ProductsData}/>}/>
          </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App