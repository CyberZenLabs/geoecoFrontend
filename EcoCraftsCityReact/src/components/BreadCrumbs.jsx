import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { DivBackBoxSC, DivHistorySC, NavLinkSC } from '../styled-components-css/styles.product-detail';
import { DivWrapLinkSC } from '../styled-components-css/styles-seller-store-settings/styles.store';
const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;
const routes = [
  {
    path: '/custom-props',
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: 'Hi' },
  },
];
export const BreadCrumbs = ({ margin }) => {
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  let navigate = useNavigate();
  return (
    <DivWrapLinkSC margin={margin}>
      <DivHistorySC>
        <DivBackBoxSC>
          <FaArrowLeft color={'#85CB33'} size={15} />
          <NavLinkSC iscolor={true} to={'#'} onClick={() => navigate(-1)}>
            Back
          </NavLinkSC>
        </DivBackBoxSC>
        <div>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <span key={match.pathname}>
              <NavLinkSC to={'/home'}>{breadcrumb} / </NavLinkSC>
            </span>
          ))}
        </div>
      </DivHistorySC>
    </DivWrapLinkSC>
  );
};
