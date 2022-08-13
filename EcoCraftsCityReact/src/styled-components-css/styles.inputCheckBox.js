import { nominalTypeHack } from 'prop-types';
import styled from 'styled-components';

export const InputCustomSC = styled.button`
  height: 30px;
  font-size: 25px;
  width: 30px;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  border: 2px solid var(--green-color);
  ${(p) =>
    p.isChecked
      ? `background: var(--green-color);
			border: none;`
      : 'background: initial;'}
`;
