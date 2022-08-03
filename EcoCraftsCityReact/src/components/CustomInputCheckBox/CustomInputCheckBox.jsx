import React, { useState, useEffect} from 'react';
import { InputCustomSC } from '../../styled-components-css/styles.inputCheckBox';
import {AiOutlineCheck} from 'react-icons/ai'



function CustomInputCheckBox(props) {

	const {isSelected, onClick=null} = props;
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		setIsChecked(isSelected)
	}, [isSelected])

	const _onClick = () => {
		if (onClick){
			onClick(isChecked)
		}
		setIsChecked(!isChecked);
	};

		return (
		<InputCustomSC onClick={_onClick} isChecked={isChecked}>
			<AiOutlineCheck color = {'white'}/>
		</InputCustomSC>
	);
}

export default CustomInputCheckBox;
