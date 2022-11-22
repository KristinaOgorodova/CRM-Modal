import {tableBody} from './mainTable.js';

export const createRow = (obj) => {
  const tr = document.createElement('tr');

  tr.classList.add('td');

  tr.insertAdjacentHTML('beforeend',
      `<td class="product-id">${obj.id}</td>
      <td>${obj.title}</td>
      <td>${obj.category}</td>
      <td class="qty">${obj.units}</td>
      <td class="amount">${obj.count}</td>
      <td>${obj.price}</td>
      <td>${obj.sum}</td>    
      <td><button class="picture-btn">
      <img src="./image/carbon_no-image.svg" alt="нет картинки"></button></td>
      <td><button class="picture-btn">
      <img src="./image/edit.svg" alt="редактировать" ></button></td>
      <td><button class="picture-btn delete">
      <img src="./image/cart.svg" alt="корзина" ></button></td>`);
  tableBody.append(tr);
};

export const renderGoods = (array) => array.map(createRow);

export const addClassToRow = () => {
  const row = document.querySelectorAll('tr');
  row.forEach(tr => {
    tr.classList.add('table-row');
  });
};
