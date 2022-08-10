import React from "react";

import { useField, ErrorMessage } from "formik";

import {
    FormInputErrorSpanSc,
    PasswordFieldSC,
    
  } from "../styled-components-css/styles.modalCreateStore";
import { IoMdAlert } from "react-icons/io";
const InpitReg = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <PasswordFieldSC
          error={
            meta.touched && meta.error !== "" && meta.error !== undefined
              ? true
              : false
          }
          {...field}
          {...props}
        ></PasswordFieldSC>
        {meta.touched && meta.error !== "" && meta.error !== undefined ? (
          <IoMdAlert className="formValidIcons" />
        ) : null}
        <FormInputErrorSpanSc>
          <ErrorMessage name={field.name} />
        </FormInputErrorSpanSc>
      </div>
    </div>
  );
};

export default InpitReg;