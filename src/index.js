import soma from './calc.js';
import Header from './header.js';

console.log('connet with webpack!');

soma(3, 5);
soma(2, 7);

const header = new Header();
header.create('Hello World!');
