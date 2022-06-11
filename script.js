// const { fetchProducts } = require("./helpers/fetchProducts");
const ol = document.querySelector('.cart__items');
const sectionItems = document.querySelector('.items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

function percorrendo() {
  return fetchProducts('computador')
  .then((index) => index.results
  .forEach((i) => sectionItems
  .appendChild(createProductItemElement(i))));
}
percorrendo();
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
 function addPdt(parametro) {
  return fetchItem(parametro).then((item) => ol.appendChild(createCartItemElement(item)));
 }
document.addEventListener('click', (event) => {
  // const ident = document.querySelector('.item__sku');
if (event.target.classList.contains('item__add')) {
const id = event.target.parentNode.firstChild.innerText;
addPdt(id);
}
});

window.onload = () => {};
