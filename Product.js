import React, { useEffect, useState } from 'react';

function Product() {
	const [state, setstate] = useState(initialState);

	useEffect(() => {
		setstate(state);
	});
	return (
		<>
			<h1>react</h1>
		</>
	);
}

export default Product;
