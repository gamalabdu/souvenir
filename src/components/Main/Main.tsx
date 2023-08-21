import React from 'react'
import './styles.css'
import { NavLink, Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main-container'>

          <nav style={{ 
            width:"100%", 
            position:"absolute", 
            margin:"0 auto", 
            textAlign:"center", 
            // mixBlendMode:"difference", 
            zIndex:"50"}}
            >
            <ul style={{ color:"white", display:"flex", flexDirection:"row", gap:"10px", textAlign:"center", justifyContent:"center", alignItems:"center"}}>
              <li><NavLink to='/about'  style={ ({isActive}) => { return isActive ? {color:"#ffffff", textDecoration:"underline"} : {color:"#959595", textDecoration:"none"} }} > About </NavLink></li>
              <li><NavLink to='/home'   style={ ({isActive}) => { return isActive ? {color:"#ffffff", textDecoration:"underline"} : {color:"#959595", textDecoration:"none"} }} > Work </NavLink></li>
            </ul>
          </nav>

          <Outlet/>

    </div>
  )
}

export default Main