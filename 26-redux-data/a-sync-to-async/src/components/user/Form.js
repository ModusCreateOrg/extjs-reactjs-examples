import React from 'react'

const renderField = (props, name, label = name.substr(0, 1).toUpperCase() + name.substr(1)) => (
  <div>
    <label>
      {label}
      <input
        type="text"
        name={name}
        value={props[ name ]}
        onChange={props.onFieldChange}
        />
    </label>
  </div>
)

const Form = (props) => {
  props.loadUser(props.id)

  return (
    <form>
      <div>ID: {props.id}</div>
      { renderField(props, 'name') }
      { renderField(props, 'email') }
      { renderField(props, 'phone', 'Phone Number') }
      { renderField(props, 'company') }
      { renderField(props, 'department') }
      { renderField(props, 'title') }
    </form>
  )
}

export default Form
