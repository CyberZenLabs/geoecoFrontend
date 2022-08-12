import React, { useState, useEffect } from 'react';
import { InputRadioSC } from '../../styled-components-css/styles.input-radio';

const InputRadio = ({ isCheck }) => {
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(isCheck);
  }, [isCheck]);

  return (
    <>
      <InputRadioSC type="radio" checked={isChecked} name="radio" />
    </>
  );
};

export default InputRadio;
