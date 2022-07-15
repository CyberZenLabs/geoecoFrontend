import { nominalTypeHack } from 'prop-types';
import styled from 'styled-components';

export const InputCustomSC = styled.button`
	height: 30px;
	width: 30px;
	border-radius: 10px;
	display: grid;
	justify-items: center;
	align-items: center;

	${(p) =>
		(p.isChecked
			? `background: var(--green-color);
			border: none;`			
			: 'background: var(--white-color);')}
`;
