import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Hero } from './components/Hero'
import { GlobalStyle } from './globalStyles'
import { Products } from './components/Products'
import { Data, Data2 } from './components/Products/data'
import { Feature } from './components/Feature'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Combination Plates' data={Data}/>
      <Products heading='Make Your Own' data={Data2}/>
      <Feature/>
    </Router>
  );
}

export default App;
