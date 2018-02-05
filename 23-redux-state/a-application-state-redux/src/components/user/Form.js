import React from 'react';

const renderField = (
  props,
  name,
  label = name
) => {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{textTransform: 'capitalize'}}>
        {label}
        <input
          type="text"
          name={name}
          value={props[name]}
          onChange={props.handleFieldChange}
          style={{ marginLeft: '12px' }}
        />
      </label>
    </div>
  );
};

const Form = props => {
  return (
    <form>
      <div>ID: {props.id}</div>
      {renderField(props, 'name')}
      {renderField(props, 'email')}
      {renderField(props, 'phone', 'Phone Number')}
      {renderField(props, 'company')}
      {renderField(props, 'department')}
      {renderField(props, 'title')}
    </form>
  );
};

export default Form;
