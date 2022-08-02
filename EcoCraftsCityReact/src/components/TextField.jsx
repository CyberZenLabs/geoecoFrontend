import React from "react";

import {useField, ErrorMessage} from "formik";
import {
    FormInputErrorSpanSc,
    InputFullWidthSC,
} from "../styled-components-css/styles.registration";
import {IoMdAlert} from "react-icons/io";

const TextField = ({label, size, ...props}) => {
    const [field, meta] = useField(props);
    const {
        onChange = null,
        name,
        values
    } = props

    const _onChange = (e) => {
        if (onChange) {
            onChange(name, e)
        }
    }

    return (
        <div>
            <div style={{position: "relative"}}>
                {onChange ?
                    <InputFullWidthSC
                    error={
                        meta.touched && meta.error !== "" && meta.error !== undefined
                            ? true
                            : false
                    }
                    {...field}
                    {...props}
                    onChange={_onChange}
                    value={values[name]}
                ></InputFullWidthSC> :
                    <InputFullWidthSC
                        error={
                            meta.touched && meta.error !== "" && meta.error !== undefined
                                ? true
                                : false
                        }
                        {...field}
                        {...props}
                    ></InputFullWidthSC>
                }
                {meta.touched && meta.error !== "" && meta.error !== undefined ? (
                    <IoMdAlert className="formValidIcon"/>
                ) : null}
                <FormInputErrorSpanSc>
                    <ErrorMessage name={field.name}/>
                </FormInputErrorSpanSc>
            </div>
        </div>
    );
};

export default TextField;
