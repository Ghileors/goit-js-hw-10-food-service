import menuListJson from '../menu.json';
import menuItemTemplate from '../templates/menu_markup.hbs';

export default function () {
  const container = document.querySelector('.js-menu');

  const menuItem = menuListJson.reduce((acc, item) => {
    return acc + menuItemTemplate(item);
  }, '');

  container.innerHTML = menuItem;
}
