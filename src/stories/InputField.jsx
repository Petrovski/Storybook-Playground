import React, { useState } from 'react';
import './input-field.css';

export const InputField = ({ value, label, placeholder, type, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className='form-group'>
      {label && (
        <label htmlFor='input-field' style={{ display: 'block' }}>
          {label}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          className='form-control'
          value={value}
          defaultValue={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          value={value}
          className='form-control'
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
