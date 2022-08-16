import { useField } from 'formik';
import React from 'react';
import { InputAboutYourself, NameNCityFieldSC } from '../styled-components-css/styles-seller-store-settings/styles.VendorProfile';
const TextFieldStore = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {props.isTextArea ? (
        <InputAboutYourself type="text" name="aboutMe" {...field} {...props}></InputAboutYourself>
      ) : (
        <NameNCityFieldSC
          label="name"
          name="name"
          type="text"
          placeholder="Surname Name"
          {...field}
          {...props}
        ></NameNCityFieldSC>
      )}
    </>
  );
};

export default TextFieldStore;
