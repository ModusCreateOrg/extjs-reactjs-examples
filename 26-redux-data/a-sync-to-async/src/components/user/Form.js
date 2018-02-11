import React from 'react';

const renderField = (props, name, label = name, type = 'text') => (
  <div style={{ marginBottom: '12px' }}>
    <label style={{textTransform: 'capitalize'}}>
      {label}
      <input
        type="text"
        name={name}
        value={props[name]}
        onChange={props.onFieldChange}
        style={{ marginLeft: '12px' }}
      />
    </label>
  </div>
);

const Form = props => {
  props.loadUser(props.id);

  const submit = e => {
    e.preventDefault();

    // do submit
  };

  return (
    <form>
      {renderField(props, 'name')}
      {renderField(props, 'email', undefined, 'email')}
      {renderField(props, 'phone', 'Phone Number', 'tel')}
      {renderField(props, 'company')}
      {renderField(props, 'department')}
      {renderField(props, 'title')}

      <button onClick={submit}>Submit</button>
    </form>
  );
};

export default Form;
