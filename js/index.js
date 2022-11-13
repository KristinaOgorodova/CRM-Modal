'use strict';

const products = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'sum': 2000,
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'sum': 2000,
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'sum': 2000,
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
    'sum': 2000,
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const tableBody = document.querySelector('tbody');

const createRow = (obj) => {
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
    <td><button class="picture-btn"><img src="./image/carbon_no-image.svg" alt="нет картинки"></button></td>
    <td><button class="picture-btn"><img src="./image/edit.svg" alt="редактировать" ></button></td>
    <td><button class="picture-btn delete"><img src="./image/cart.svg" alt="корзина" ></button></td>`);
  tableBody.append(tr);
};

const renderGoods = (array) => array.map(createRow);

renderGoods(products);

const header = document.querySelector('.add-product');
const discountCheckbox = document.querySelector('#discount');
const discountQty = document.querySelector('#number');
const totalSum = document.querySelector('.add-form__amount');
const form = document.querySelector('.add');

const addCardBtn = document.querySelector('.table-select__add-btn');
const modal = document.querySelector('.overlay');


addCardBtn.addEventListener('click', () => {
  modal.classList.add('overlay_open');
});


// modalCloseBtn.addEventListener('click', () => {
//   modal.classList.remove('overlay_open');
// });
// form.addEventListener('click', event => {
//   event.stopPropagation();
// })
// modal.addEventListener('click', ()=> {
//   modal.classList.remove('overlay_open');
// });


modal.addEventListener('click', e => {
  const target = e.target;
  if (target === modal || target.classList.contains('add-product__close-btn')) {
    modal.classList.remove('overlay_open');
  }
});

const row = document.querySelectorAll('tr');
row.forEach(tr => {
  tr.classList.add('table-row');
});

tableBody.addEventListener('click', ({target}) => {
  if (target.closest('.delete')) {
    const currentRow = target.closest('.table-row');
    const productId = +currentRow.querySelector('.product-id').textContent;
    const currentRowIndex = products.findIndex((product) => product.id === productId);

    console.log(products.splice(currentRowIndex, 1));

    currentRow.remove();
  }
});

///////////////////////////////////////////////////////////////////
const discountArea = document.querySelector('.add-form__check');
discountArea.disabled = true;

if (discountCheckbox.checked) {
  discountArea.disabled = false;
};

const addContactData = product => {
  products.push(product);
  console.log('data: ', product);
}

const addNewProduct = (form, addContactData) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newProduct = Object.fromEntries(formData);
    addContactData(newProduct);
    form.reset();

  });
}




