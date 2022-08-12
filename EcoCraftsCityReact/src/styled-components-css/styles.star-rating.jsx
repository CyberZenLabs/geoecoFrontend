import styled from "styled-components/macro";

export const star = styled.div`
  cursor: pointer;
  transition: color 200ms;
`;

export const StarRadio = styled.input`
  display: none;
  
`;
export const StarWrap = styled.div`
  padding: ${(props) => (props.product ? "0 0px" : null)};
 
`;

