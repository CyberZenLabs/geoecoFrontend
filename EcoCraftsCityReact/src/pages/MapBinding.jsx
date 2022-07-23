import React from 'react'
import {
    DivMapBindingBoxSC,
    DivTextSC,
    DivButtonsSC,
    DivContentMapBindingSC,
    DivBoxNumCardSC,
    DivRowBoxSC,
    DivBoxMMSC,
    DivColumnsBoxSC,
    DivBoxGGSC,
    DivBoxCVVCVCSC,
    DivSlashSC,
    DivImgBoxSC
} from "../styled-components-css/styles.map-binding";
import TextField from "../components/TextField";
import { ButtonCustomSC } from "../styled-components-css/styles.custom-button";
import { ButtonCustomWhiteSC } from "../styled-components-css/styles.custom-button-white";
import { Formik, Form } from 'formik';

const MapBinding = () => {
    const startingValues = { text: "" };
    return (
        <DivMapBindingBoxSC>
            <DivContentMapBindingSC>
                <DivTextSC>Привязка карты</DivTextSC>
                <Formik initialValues={startingValues}>
                    {(formik) => (
                        <Form>
                            <DivRowBoxSC>
                                <DivBoxNumCardSC>
                                    <TextField
                                        label="cardNumber"
                                        type="text"
                                        name="cardNumber"
                                        fullSize={false}
                                        placeholder={"Номер карты"}
                                    />
                                </DivBoxNumCardSC>

                                <DivColumnsBoxSC>

                                <DivBoxMMSC>
                                    <TextField
                                        label="month"
                                        type="text"
                                        name="month"
                                        fullSize={false}
                                        placeholder={"ММ"}
                                    />
                                </DivBoxMMSC>

                                <DivSlashSC>/</DivSlashSC>

                                <DivBoxGGSC>
                                    <TextField
                                        label="year"
                                        type="text"
                                        name="year"
                                        fullSize={false}
                                        placeholder={"ГГ"}
                                    />
                                </DivBoxGGSC>
                                <DivBoxCVVCVCSC>
                                    <TextField
                                        label="text"
                                        type="text"
                                        name="text"
                                        fullSize={false}
                                        placeholder={"CVV/CVC"}
                                    />
                                </DivBoxCVVCVCSC>
                                </DivColumnsBoxSC>
                                </DivRowBoxSC>
                                <DivImgBoxSC></DivImgBoxSC>
                            <DivButtonsSC>
                                <ButtonCustomWhiteSC
                                    width={"100%"}
                                    padding={"18px 32px"}
                                    type="submit">Отмена</ButtonCustomWhiteSC>

                                <ButtonCustomSC
                                disabled={!formik.dirty || !formik.isValid}
                                statusOpasity={!formik.dirty || !formik.isValid}
                                    width={"100%"}
                                    padding={"18px 32px"}
                                    type="submit">Привязать</ButtonCustomSC>
                            </DivButtonsSC>
                        </Form>
                    )}
                </Formik>
            </DivContentMapBindingSC>
        </DivMapBindingBoxSC >
    )
}

export default MapBinding;