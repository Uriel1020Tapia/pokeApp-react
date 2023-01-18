import React from 'react'
import { Outlet } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
        <h1>Navegación basica</h1>
      <Outlet></Outlet>
    </div>
  )
}       