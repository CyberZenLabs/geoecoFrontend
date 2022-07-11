import React from 'react'
import {
    DivMapBindingBoxSC,
    DivTextSC,
    DivBoxWhiteCardSC,
    ImgWhiteCardSC,
    ImgGrayCardSC,
    ImgCardsLogoSC,
    ImgGrayRectangleSC,
    DivImgBoxSC,
    DivButtonsSC,
    DivContentMapBindingSC,
    DivBoxSC,
    DivBoxRowSC,
    DivBoxMMSC,
    DivBoxColumnsSC,
    DivBoxGGSC,
    DivBoxCVVCVCSC,
    DivSlashSC
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
 
                            <DivBoxRowSC>

                                <DivBoxSC>

                                    <TextField
                                        label="text"
                                        type="text"
                                        name="text"
                                        fullSize={false}
                                        placeholder={"Номер карты"}
                                    />
                                </DivBoxSC>

                                <DivBoxColumnsSC>

                                <DivBoxMMSC>
                                    <TextField
                                        label="text"
                                        type="text"
                                        name="text"
                                        fullSize={false}
                                        placeholder={"ММ"}
                                    />
                                </DivBoxMMSC>

                                <DivSlashSC>/</DivSlashSC>

                                <DivBoxGGSC>
                                    <TextField
                                        label="text"
                                        type="text"
                                        name="text"
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
                                </DivBoxColumnsSC>
                                </DivBoxRowSC>

 <DivImgBoxSC>

    <ImgGrayCardSC>
    <ImgGrayRectangleSC>
    <DivBoxWhiteCardSC>
    <ImgWhiteCardSC>  
    <ImgCardsLogoSC>
    </ImgCardsLogoSC>                                    
    </ImgWhiteCardSC>
</DivBoxWhiteCardSC>
    </ImgGrayRectangleSC>
    </ImgGrayCardSC>

</DivImgBoxSC>

                            <DivButtonsSC>
                                <ButtonCustomWhiteSC
                                    padding={"18px 32px"}
                                    type="submit">Отмена</ButtonCustomWhiteSC>

                                <ButtonCustomSC
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