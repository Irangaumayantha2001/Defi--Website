import React, { useState } from 'react'

function Navbar() {

const [open, setOpen] = useState(false)

const handleNavOpen = () => {
    setOpen(!open)
}

// create close toggle function
const handleNavClose = () => {
    setOpen(!open)
}

  return (
    <div className='w-full h-16 bg-black '></div>
  )
}

export default Navbar