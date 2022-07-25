import styled from 'styled-components/macro';

const middleWidth = 920
const minWidth = 660

export const DivCartBoxSC = styled.div`
	display: grid;
	justify-items: center;
    width: 100vw;
`;

export const DivContentCartSC = styled.div`
	display: grid;
	grid-template-rows: max-content max-content;
	max-width: 1322px;
	width: 85vw;
	grid-gap: 56px;
  padding-bottom: 19px;
  @media (max-width: ${middleWidth}px) {
    width: 90vw;
  }
  @media (max-width: ${minWidth}px) {
    width: 100vw;
  }
`;

export const DivBoxFirstRowSC = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 400px);
	grid-template-rows: fit-content();
	gap: 24px;
    @media (max-width: ${middleWidth}px) {
      grid-template-columns: repeat(auto-fit, 300px);
    }
`;

export const DivBoxRowProductSC = styled.div`
	grid-column: 1 / span 2;
	grid-row: 1 / span 10;
	height: fit-content;
	/* width: 100%; */
  @media (max-width: ${middleWidth}px) {
    //width: 100vw;
    padding: 85px 20px 226px 22px;
  }
  
	background: rgba(243, 243, 243, 0.5);
	border-radius: 20px;

	display: grid;
	grid-template-rows: 32px 32px 1px max-content;
	padding: 85px 20px 226px 50px;
	gap: 38px;
  @media (max-width: ${minWidth}px) {
    background: #ffffff;
    grid-template-rows:max-content;
    padding: 0px 15px 226px 15px;
  }
`;

export const H2TitleProductList = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 37px;
	/* identical to box height */
	//text-align: center;
`;

export const DivBoxCheckSC = styled.div`
	padding-left: 2px;
	display: grid;
	grid-template-columns: 30px 150px auto;
	justify-items: center;
	align-items: center;
`;

export const DivBoxTotalPriceSC = styled.div`
	//grid-column: 3 / span 1;
	//grid-row: 1 / span 8;
	height: 809px;
	//width: 100%;
	max-width: 457px;
	width: 457px;
	//padding-left: 24px;
	border-radius: 20px;
	background: #f3f3f380;
`;

export const DivBoxListSC = styled.div`
	display: grid;
	//grid-template-rows: repeat(auto-fit, 130px);
	grid-auto-rows: 130px;
	gap: 80px;
  @media (max-width: ${minWidth}px) {
    grid-auto-rows: 206px;
    gap: 16px;
    
  }
`;

export const DivItemListSC = styled.div`
	display: grid;
	grid-template-columns: 30px 130px 200px 194px auto;
	gap: 20px;
  @media (max-width: ${middleWidth}px) {
    //grid-template-columns: 30px 110px 200px 149px auto;
    grid-template-columns: 1fr 4fr 6fr 5fr auto;
  }
  @media (max-width: ${minWidth}px) {
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr 2fr;
    background: rgba(243, 243, 243, 0.5);
    border-radius: 20px;
    height: 206px;
    padding: 15px;
    box-sizing: border-box;
    gap: 20px;
  }
`;

export const DivImageSC = styled.div`
	background: ${p => `url(${p.src})`};
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: center;
`;

export const DivBoxTitleSC = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	:last-child {
		font-style: normal;
		font-weight: 300;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const SpanTitleSC = styled.span`
	font-family: var(--root-font-family);
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
`;

export const DivPriceSC = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 39px;
  display: grid;
  align-items: baseline;

	@media (max-width: ${middleWidth}px) {
		font-size: 20px
	}
`;

export const SpanPriceSC = styled.span`
	display: block;
    line-height: 49px;
		@media (max-width: ${middleWidth}px) {
			height: 20px;
          line-height: 31px;
		}
  @media (max-width: ${minWidth}px) {
    line-height: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }

`


export const DividerSC = styled.div`
	width: 100%;
	border-bottom: 1px solid rgba(0, 0, 0, 0.24);
`;

export const DivFirstRowDeliverySC = styled.div`
	background: rgba(243, 243, 243, 0.5);
	border-radius: 20px;
	width: 824px;
	height: 347px;
`;
export const DivTextBoldSizeSC = styled.div`
	font-weight: bold;
	display: flex;
	padding-left: 50px;
	padding-right: 50px;
	padding-top: 50px;
	font-size: 30px;
	flex-direction: row;
	justify-content: space-between;
`;
export const DivInfoOfDeliverySC = styled.div`
	display: flex;
	margin-top: 16px;
`;
export const DivRowDeliverySC = styled.div``;
export const DivFirstRowInfoSC = styled.div`
	background: rgba(243, 243, 243, 0.5);
	border-radius: 20px;
	width: 400px;
	height: 139px;
`;
export const DivSecondRowInfoSC = styled.div`
	background: rgba(243, 243, 243, 0.5);
	border-radius: 20px;
	width: 400px;
	height: 139px;
	margin-left: 24px;
`;
export const DivTextMinSizeSC = styled.div`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: rgba(133, 203, 51, 0.7);
`;
export const DivTextBoldSizeInfoDeliverySC = styled.div`
	font-weight: bold;
	display: flex;
	padding-top: 30px;

	font-size: 20px;
	flex-direction: row;
	justify-content: space-around;
`;
export const DivTextMinSizeInfoDeliverySC = styled.div`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 24px;
	text-align: center;
	color: rgba(133, 203, 51, 0.7);
`;

export const DivBoxMinWidthSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 70px;
`

export const DivBoxProductMinWidthSC = styled.div`
  display: grid;
  //grid-template-rows: repeat(auto-fit, 206px);
`

export const DivCartTitleMinSC = styled.div`
  background: #F3F3F380;
  border-radius: 20px; 
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  row-gap: 4px;
  @media (max-width: ${minWidth}px) {
    height: 101px;
    padding: 15px;
  }
  
  `
export const H2CartTitleSC = styled.h2`
  align-self: self-end;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
`
export const DivSumForPayTitleSC = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-rows: 100%;
  grid-auto-columns: max-content max-content;
  gap: 5px;
    p{
      grid-row: 1;
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 14px;
      color: #252525B2;  
  }
    span{
      grid-row: 1;
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 14px;
      color: #252525CC;
    }`

export const DivCartTitleMinCheckBoxSC = styled.div`
  
  padding-right: 20px;
  grid-row: 1/3;
  align-self: center;
  justify-self: right;
`

export const DivBoxMinWidthTitleProduct = styled.div`
    display: grid;
  grid-template-rows: 30px max-content;
  //gap: 10px;
  line-height: 37px;
  
`

export const SpanTitleCartSC = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  //text-align: center;

  color: #CBCBCB;
`

export const DivBoxButtonProducttMinWidthSC = styled.div`
  display: grid;
  //grid-template-rows: repeat(auto-fit, 206px);
  grid-template-columns: 25px 96px;
  justify-content: end;
  align-items: center;
  gap: 16px;
`

export const DivBoxButtonProducttMinWidthIconSC = styled.div`
  height: 21px;
`

export const DivBoxStarMinWidthIconTempSC = styled.div`
  display: grid;
  grid-template-columns: 95px max-content;
  gap: 12px;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 31px;
    text-align: center;

    color: #CBCBCB;
  }
`
export const DivBoxStarMinWidthIconSC = styled.div`
  width: 95px;

`
export const DivContainerTitleSC = styled.div`
  box-sizing: border-box;
  padding: 15px;
`

export const DivButtonTempSC = styled.div`
  box-sizing: border-box;
  padding: 15px;
`