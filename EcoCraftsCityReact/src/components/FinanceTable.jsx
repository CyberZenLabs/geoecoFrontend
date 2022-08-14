import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { DivWrapModal,H1ContentInfoSC,BlockModal,DivContentWrapModal, ButtonContinueModal, PContentInfoSC, BoldSC, } from "../styled-components-css/styles.settingsSeller";
import {
  Container,
  TableResponsive,
  Table,
  TableH,
  TableD,
  Tablehead,
} from "../styled-components-css/styles.FinanceTable";
const FinanceTable = () => {
    
    return (
        <>
         <Container>
		
		<TableResponsive>
			<Table>
              
				<Tablehead>
					<tr>
						
						<TableH>Платежи</TableH>
						<TableH>Дата</TableH>
                        <TableH>Сумма</TableH>
                        <TableH>Статус</TableH>
						
					</tr>
				</Tablehead>
               
				<tbody>
					<tr>
						
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
						
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					</tr>
					<tr>
					<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
						
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
						
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
						
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
						
					</tr>
					<tr>
                    <TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
						<TableD>Bergnaum </TableD>
                        <TableD>Bergnaum </TableD>
					
					</tr>
				</tbody>
                </Table>
            </TableResponsive>
        </Container>
        </>
      );
    };
    
    export default FinanceTable;
    