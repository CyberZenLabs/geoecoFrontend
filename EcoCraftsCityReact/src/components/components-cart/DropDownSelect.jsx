import React from 'react';
import Select from 'react-select';

const DropDownSelect = () => {
  const options = [
    { value: 'Russian Post ', label: 'Russian Post ' },
    { value: 'CDEK', label: 'CDEK' },
  ];

  const colorStyles = {
    container: {
      maxHeight: '27px',
      minHeight: '27px',
    },
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      borderRadius: '10px',
      minWidth: '240px',
      maxWidth: '240px',
      // maxHeight: '27px',
      // minHeight: '27px',
      padding: '0',
      alignItems: 'center',
      margin: '0',
      colors: {
        ...styles.colors,
        primary: 'var(--green-color)',
      }
    }),
  };

  const handleChange = (selectedOption) => {
    console.log('lol', selectedOption);
  };

  return (
    <>
      <Select options={options} onChange={handleChange} theme={colorStyles.control} styles={colorStyles.container} defaultValue={options[0]} />
    </>
  );
};

export default DropDownSelect;
