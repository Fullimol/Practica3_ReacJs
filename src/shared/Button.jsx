import React from 'react'

const Button = (props) => {
    const {button_name="click", className, placeholder, onClick} = props
  return (
    <button 
    className={className || "btn btn-primary" } 
    placeholder={placeholder}
    onClick={onClick}
    type="submit"
    
    >
    {button_name}
    </button>

  )
}

export default Button