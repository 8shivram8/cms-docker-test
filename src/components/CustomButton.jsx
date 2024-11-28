import React from 'react';

const CustomButton = ({ onClick, label }) => (
  <button onClick={onClick} style={{ padding: '10px', background: 'lightblue', borderRadius: '5px' }}>
    {label}
  </button>
);

export default CustomButton;
