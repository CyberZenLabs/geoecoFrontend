import React, {useState} from 'react';
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {
    BackButtonCustomSC,
    DivBoxImageCarouselSC, DivBoxLeftCarouselSC,
    ImageCarouselCustom, NextButtonCustomSC
} from "../../styled-components-css/styles.product-detail";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";

const CarouselMultiBox = (props) => {

    const {
        getUrlSrc,
        images
    } = props;

    const eventLogger = (ev) => {

        if (ev.nativeEvent.srcElement.localName !== 'div') {
            getUrlSrc(ev.nativeEvent.srcElement.currentSrc)
        }

        // console.log('>>>>>>>>>>',ev.nativeEvent.srcElement);
    }
    return (
        <DivBoxLeftCarouselSC>
            <CarouselProvider
                naturalSlideWidth={30}
                naturalSlideHeight={20}
                totalSlides={5}
                hasMasterSpinner={true}
                touchEnabled={true}
                visibleSlides={3}
                // infinite
                orientation={'vertical'}
                lockOnWindowScroll
                // visibleSlides={3}
                // isIntrinsicHeight={true}
            >
                <BackButtonCustomSC>
                    <AiOutlineArrowUp
                        color={"#3D3D3D"}
                        size={25}
                    />
                </BackButtonCustomSC>
                <Slider

                    trayProps={{
                        onClick: eventLogger,

                        onTouchStart: eventLogger,



                        draggable: true,
                    }}
                >
                    {
                        images.map((item, i) => {
                            return(
                                <Slide index={i} key={`sfsdfsdf${i}`}>
                                    <DivBoxImageCarouselSC>
                                        <ImageCarouselCustom
                                            src={item}/>
                                    </DivBoxImageCarouselSC>

                                </Slide>
                            )
                        })
                    }
                    {/*<Slide index={0}>*/}
                    {/*    <DivBoxImageCarouselSC>*/}
                    {/*        <ImageCarouselCustom*/}
                    {/*            src={'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'}/>*/}
                    {/*    </DivBoxImageCarouselSC>*/}

                    {/*</Slide>*/}
                    {/*<Slide index={1}>*/}
                    {/*    <DivBoxImageCarouselSC>*/}
                    {/*        <ImageCarouselCustom*/}
                    {/*            src={'https://static.insales-cdn.com/files/1/6751/19995231/original/ss22_new.jpg'}/>*/}
                    {/*    </DivBoxImageCarouselSC>*/}

                    {/*</Slide>*/}
                    {/*<Slide index={2}>*/}
                    {/*    <DivBoxImageCarouselSC>*/}
                    {/*        <ImageCarouselCustom*/}
                    {/*            src={'https://stjames.ru/upload/iblock/749/StJ-0322-0.jpg'}/>*/}
                    {/*    </DivBoxImageCarouselSC>*/}

                    {/*</Slide>*/}
                    {/*<Slide index={3}>*/}
                    {/*    <DivBoxImageCarouselSC>*/}
                    {/*        <ImageCarouselCustom*/}
                    {/*            src={'https://static.insales-cdn.com/files/1/6751/19995231/original/ss22_new.jpg'}/>*/}
                    {/*    </DivBoxImageCarouselSC>*/}

                    {/*</Slide>*/}
                    {/*<Slide index={4}>*/}
                    {/*    <DivBoxImageCarouselSC>*/}
                    {/*        <ImageCarouselCustom*/}
                    {/*            src={'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'}/>*/}
                    {/*    </DivBoxImageCarouselSC>*/}

                    {/*</Slide>*/}
                </Slider>
                <NextButtonCustomSC>
                    <AiOutlineArrowDown
                        color={"#3D3D3D"}
                        size={25}
                    />
                </NextButtonCustomSC>
            </CarouselProvider>
        </DivBoxLeftCarouselSC>
    );
}

export default CarouselMultiBox;