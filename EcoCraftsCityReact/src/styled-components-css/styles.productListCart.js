import styled from "styled-components/macro";

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
  
  button{
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
    
  }
  span {
    font-size: 40px;
    display: grid;
    align-items: center;
    font-weight: 200;
    justify-items: center;
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
  :checked{
    background: #85CB33;
  }
`