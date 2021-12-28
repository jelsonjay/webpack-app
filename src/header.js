class Header {
	create() {
		const header = document.createElement('h2');

		header.innerHTML = text;

		document.querySelector('body').appendChild(header);
	}
}

export default Header;
