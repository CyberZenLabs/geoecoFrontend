import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { DivWrapModal,H1ContentInfoSC,BlockModal,DivContentWrapModal, ButtonContinueModal, PContentInfoSC, BoldSC, } from "../styled-components-css/styles-seller-store-settings/styles.settingsSeller";
import {
  Container,
  TableResponsive,
  Table,
  TableH,
  TableD,
  Tablehead,
  TableTR,
} from "../styled-components-css/styles-seller-store-settings/styles.FinanceTable";
const FinanceTable = () => {
    
    return (
        <>
         <Container>
		
		<TableResponsive>
			<Table>
              
				<Tablehead>
					<TableTR>
						
						<TableH>Payments</TableH>
						<TableH>Date</TableH>
                        <TableH>Total</TableH>
                        <TableH>Status</TableH>
						
					</TableTR>
				</Tablehead>
               
				<tbody>
					<TableTR>
						
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					</TableTR>
                    <TableTR>
						
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					</TableTR>
                    <TableTR>
						
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					</TableTR>
					
				</tbody>
                </Table>
            </TableResponsive>
        </Container>
        </>
      );
    };
    
    export default FinanceTable;
    