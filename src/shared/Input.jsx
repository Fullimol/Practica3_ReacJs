import React from 'react'

const Input = (props) => {
  const { type, className, id, placeholder, required, onChange, name, value } = props
  return (

    <div>
      <label className="form-label">{name}</label>
      <input
        name={name}
        type={type || "text"}
        className={className || "form-control"}
        id={id}
        placeholder={placeholder}
        required={required || false}
        onChange={onChange}
        value={value}
      />
    </div>

  )
}

export default Input