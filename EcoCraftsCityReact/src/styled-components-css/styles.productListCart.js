import styled from 'styled-components/macro';

const middleWidth = 920
const minWidth = 660

export const DivBoxCountProductSC = styled.div`
	//outline: 1px solid #4e65ff;
	display: grid;
`;

export const DivBoxCountProductTempSC = styled.div`
	//outline: 1px solid #4e65ff;
	display: grid;
	width: 148px;
	height: 50px;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;


	@media (max-width: ${middleWidth}px) {
			height: 31px;
      align-items: center;
		}

  @media (max-width: ${minWidth}px) {
    width: 100px;
  }

	button {
		display: grid;
		grid-template-rows: 50px;
		//font-family: 'Montserrat';
		font-weight: 200;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		font-size: 40px;
		font-style: normal;

		align-items: center;
		box-sizing: border-box;
		background: rgba(217, 217, 217, 0.28);
		justify-items: center;
		border: 1px solid rgba(0, 0, 0, 0.33);
		cursor: pointer;

		@media (max-width: ${middleWidth}px) {
			width: 31px;
			height: 31px;
          grid-template-rows: 31px;
		}

	}
	span {
		font-size: 40px;
		display: grid;
		align-items: center;
		font-weight: 200;
		justify-items: center;

		@media (max-width: ${middleWidth}px) {
			font-size: 24px;
		}

	}
`;

export const DivBoxInputCartSC = styled.div`
	display: grid;
	justify-items: baseline;
`;
export const InputCustomSC = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  border: 1px solid black;
  :checked{
    background: #85CB33;
  }
`;
