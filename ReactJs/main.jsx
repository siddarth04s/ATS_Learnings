import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Prereq from './Prereq.jsx'
import Functional_comp from './Functional_comp.jsx'
import Best_pract_code from './Best_pract_code.jsx'
import Props from './Props.jsx'
import { Rendering } from './Rendering.jsx'
import { Map } from './Map.jsx'
import Exercise1 from './Exercise1.jsx'
import Exerc_click from '../LifeCycle/Exerc_click.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Prereq/> */}
    {/* <Functional_comp/> */}
    {/* <Best_pract_code/> */}
    {/* <Props name="sidd" age={20} cmp="ats"/>
    <Props name="ss" age={20} cmp="ats"/> */}
    {/* <Rendering /> */}
    {/* <Map/> */}
    {/* <Exercise1/> */}
    <Exerc_click/>

  </React.StrictMode>,
)
