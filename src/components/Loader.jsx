import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loader = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<BounceLoader color="#6e5591" size={100} />
		</div>
	);
};

export default Loader;
