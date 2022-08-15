import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import React from "react";
import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import { FlowerLoaderSc } from "../styled-components-css/styles.loader";
import { demoSchema } from "../validations/demoSchema";
import TextField from "./TextField";

const ReviewForm = () => {
  const startingValues = { email: "", name: "" };
  return (
    <>
      <div>ReviewForm</div>
      <Formik
        initialValues={startingValues}
        validationSchema={demoSchema}
        onSubmit={(values) => {
          // console.log("values", values, "dest-values", { ...values });
        }}
      >
        {(formik) => (
          <Form>
            {/* {console.log(formik.values)} */}
            <TextField
              label="email"
              type="email"
              name="email"
              fullSize={true}
              placeholder={"Email"}
            />
            <TextField
              label="name"
              type="name"
              name="name"
              fullSize={true}
              placeholder={"Name"}
            />
            <ButtonCustomSC
              disabled={!formik.dirty || !formik.isValid}
              //   statusOpasity={!formik.dirty || !formik.isValid}
              width={"100%"}
              padding={"18px 32px"}
              type="submit"
            >
              <span>
                Continue&nbsp;&nbsp;
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </span>
            </ButtonCustomSC>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ReviewForm;
