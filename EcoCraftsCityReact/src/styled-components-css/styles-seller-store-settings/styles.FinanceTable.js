import styled from "styled-components/macro";
import image from "../../img/geoecologo.png";
import {Link} from "react-router-dom";

export const Container = styled.div`
max-width: 1170px;
width:100%;

`;
export const TableResponsive = styled.div`

`;
export const Table = styled.table`

width: 100%;
border-style: hidden;

	border-collapse: collapse;
	white-space: nowrap;
`;
export const TableH = styled.th`
text-align: center;
padding: 10px;

color: #000;
@media (max-width:480px) {
    :nth-child(n+2){
    display: none;
   }
  }
`;
export const TableD = styled.td`
text-align: center;
    padding: 10px;
    @media (max-width:480px) {
        :nth-child(n+2){
    display: none;
   }
  }
`;
export const Tablehead = styled.thead`
border-radius: 10px;
box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.22);

`;
export const TableTR = styled.tr`


`;