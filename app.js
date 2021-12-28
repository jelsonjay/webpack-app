(function myFunc(win, doc) {
	'use strict';

	function f1(a, b) {
		return a + b;
	}

	console.log(f1(4, 2));

	function f2(a, d) {
		return a * d;
	}

	console.log(f2(8, 3));

	const handleRemove = (a, b) => {
		return a / b;
	};

	console.log(handleRemove(8, 3), 'Arrow Function');
})(window, document);
