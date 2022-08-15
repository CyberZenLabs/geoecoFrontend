import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {
    NavLinkSC,
    DivHistorySC,
    DivBackBoxSC,

} from "../../styled-components-css/styles.product-detail";
import {
    FaArrowLeft
} from "react-icons/fa";


const CustomPropsBreadcrumb = ({ someProp }) => (
    <span>{someProp}</span>
);

const routes = [
    { path: '/custom-props', breadcrumb: CustomPropsBreadcrumb, props: { someProp: 'Hi' }},
];

const BreadcrumbsHistory = (props) => {
    const breadcrumbs = useBreadcrumbs(routes);


    return (
        <DivHistorySC>
            <DivBackBoxSC>
                <FaArrowLeft
                    color={"#85CB33"}
                    size={15}
                />
                <NavLinkSC
                    iscolor={true}
                    to={'/'}
                >Back</NavLinkSC>
            </DivBackBoxSC>
            <div>
                {breadcrumbs.map(({
                                      match,
                                      breadcrumb
                                  }) => (
                    <span key={match.pathname}>
                            <NavLinkSC to={match.pathname}>{breadcrumb} / </NavLinkSC>
                        </span>
                ))}
            </div>

        </DivHistorySC>
    );
}

export default BreadcrumbsHistory;