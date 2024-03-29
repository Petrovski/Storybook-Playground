import React, { useState } from 'react';
import './select.css';

export const Select = (props) => {
  const [data] = useState(props.data);
  const [selectedData, updateSelectedData] = useState('');
  function handleChange(event) {
    updateSelectedData(event.target.value);
    if (props.onSelectChange) props.onSelectChange(selectedData);
  }

  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <select name='customSearch' className='dropdown' onChange={handleChange}>
      <option className='options'>Select Item</option>
      {options}
    </select>
  );
};
