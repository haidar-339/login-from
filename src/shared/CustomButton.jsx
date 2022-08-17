import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton({ value, onClick, type }) {
	return (
		<Button variant="contained" color="primary" fullWidth type="type">
			{value}
		</Button>
	);
}

export default CustomButton;
