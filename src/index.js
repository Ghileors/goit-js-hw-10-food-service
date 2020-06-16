import './styles.css';
import itemTemplate from '../src/templates/item_template.hbs';
import menu from './menu.json';
import { checkLocalStorage } from './scripts/theme.js';

const itemMarkup = itemTemplate(menu);
const menuMarkup = document.querySelector('.js-menu');

menuMarkup.insertAdjacentHTML('beforeend', itemMarkup);

checkLocalStorage();
