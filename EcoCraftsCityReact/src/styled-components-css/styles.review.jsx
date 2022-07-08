import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const WrapShopContainerSC = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  //border: 2px solid grey;
  height: 356px;
  width: 85vw;
  max-width: 1322px;
  margin: auto;
  margin-top: 50px;
  background: #DBF0C2;
  border-radius: 20px;
  @media (max-width: 480px) {
    height: 262px;
  }
`;


export const ReviewContainerSC = styled.div`
  display: grid;
  grid-template-columns: 337px auto;
  grid-template-rows: fit-content auto;
  grid-gap: 24px;
  //border: 2px solid grey;
  //justify-content: center;
  //align-content: center;
  height: 100vh;
  width: 85vw;
  max-width: 1322px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const DivLeftBoxShopSC = styled.div`
  //border: 2px solid black;
  width: 100%;
  height: 261px;
  background-color: rgba(243,243,243,.5);
  border-radius: 20px;
  padding: 20px;
`;

export const DivShopInfoSC = styled.div`
  display: flex;
  height: max-content;
  width: max-content;
`;

export const ImgShopInfoSC = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 12px;
`;

export const DivTitleShopInfoSC = styled.div`
  width: 195px;
  //border: 2px solid green;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  height: max-content;
`;

export const TitleShopInfoSC = styled.h5`
  font-size: 15px;
  font-weight: 600;
`;

export const LocationShopInfoSC = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-top: 15px;
`;

export const DivLinksInfoSC = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  row-gap: 14px;
  width: 100%;
  //border: 2px solid green;
  height: max-content;
  margin-top: 30px;
`;

export const LinkShopInfo = styled(Link)`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  width: fit-content;
  text-decoration: none;
  color: var(--color-black);
`; 

export const DivLinkReviewRaitingSC = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const DivRigthBoxReviewSC = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 261px;
  
`;

export const ReviewBoxNameSC = styled.h1`
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
`;


