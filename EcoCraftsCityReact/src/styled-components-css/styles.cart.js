import styled from 'styled-components/macro';

export const DivCartBoxSC = styled.div`
	display: grid;
	justify-items: center;
`;

export const DivContentCartSC = styled.div`
	display: grid;
	grid-template-rows: max-content 510px;
	max-width: 1322px;
	width: 85vw;
	grid-gap: 56px;
`;

export const DivBoxFirstRowSC = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 400px);
	grid-template-rows: fit-content();
	gap: 24px;
`;

export const DivBoxRowProductSC = styled.div`
	grid-column: 1 / span 2;
	grid-row: 1 / span 10;
	height: fit-content;
	width: 100%;
	background: rgba(243, 243, 243, 0.5);
	border-radius: 20px;

	display: grid;
	grid-template-rows: 32px 32px 1px max-content;
	padding: 85px 0 226px 50px;
	gap: 38px;
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
	border: 1px solid rgba(0, 230, 0, 0.5);
	//padding-left: 24px;
	border-radius: 20px;
	background: #f3f3f380; ;
`;

export const DivBoxListSC = styled.div`
	display: grid;
	//grid-template-rows: repeat(auto-fit, 130px);
	grid-auto-rows: 130px;
	gap: 80px;
`;

export const DivItemListSC = styled.div`
	display: grid;
	grid-template-columns: 30px 130px 200px 194px auto;
	gap: 20px;
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
`;

export const DividerSC = styled.div`
	width: 714px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.24);
`;
