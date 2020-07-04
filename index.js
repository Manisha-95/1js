// Import stylesheets
import './style.css';

// Write Javascript code!
var x=[{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}]
let m=x.filter(c=> Object.values(c));
console.log(m.filter(a=>a.type=='external'));
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;