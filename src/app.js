import "babel-polyfill";

import { markupObject } from "./js/mustache-markup-object";

const template = require('./mustache-html/mustache.html');
const html = template(markupObject);
const siteContent  = document.createElement('div');
siteContent.innerHTML = html;
document.body.appendChild(siteContent);

import './scss/styles.scss'
console.log('=> 🔥  Webpack app');