import './style.css';

class Header {
	create(text) {
		const header = document.createElement('h2');

		header.classList.add('title');

		header.innerHTML = text;

		document.querySelector('body').appendChild(header);
	}
}

export default Header;
