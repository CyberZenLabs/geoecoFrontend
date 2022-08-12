import React, { useState, useEffect } from 'react';
import { DivHideCheckSC, InputCustomSC } from '../../styled-components-css/styles.inputCheckBox';
import { HiCheck } from 'react-icons/hi';

function CustomInputCheckBox(props) {
  const { isSelected, onClick = null } = props;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);

  const _onClick = () => {
    if (onClick) {
      onClick(isChecked);
    }
    setIsChecked(!isChecked);
  };

  return (
    <InputCustomSC onClick={_onClick} isChecked={isChecked}>
      {isChecked && <HiCheck color={'white'} />}
    </InputCustomSC>
  );
}

export default CustomInputCheckBox;
