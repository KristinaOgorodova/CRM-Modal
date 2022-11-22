import {createRow} from './createElem.js';
import {products, calculateTotalPrice} from './mainTable.js';


const modal = document.querySelector('.overlay');
const formTotalPrice = document.getElementById('form-total-price');
export const discountInput = document.querySelector('.add-form__check');
const count = document.getElementById('count');
const price = document.getElementById('price');
const form = document.querySelector('form');
const addCardBtn = document.querySelector('.table-select__add-btn');
const discountCheckbox = document.querySelector('#discount');

const openModal = () => modal.classList.add('overlay_open');
const closeModal = () => modal.classList.remove('overlay_open');


addCardBtn.addEventListener('click', openModal);

modal.addEventListener('click', e => {
  const target = e.target;
  if (target === modal || target.classList.contains('add-product__close-btn')) {
    closeModal();
  }
});


const resetForm = () => {
  form.reset();
  formTotalPrice.textContent = '';
};

const disableOrEnableDiscountInput = () => {
  if (discountCheckbox.checked) {
    discountInput.disabled = false;
  } else {
    discountInput.disabled = true;
    discountInput.value = '';
  }
};

const generateRandomId = () => Math.floor(Math.random() * 100000000);

const calculateTotalPriceForProduct = (count, price) => {
  formTotalPrice.textContent = `$ ${count.value * price.value}`;
};

const addNewProduct = (product) => {
  product.id = generateRandomId();
  product.sum = product.count * product.price;

  products.push(product);
};

discountCheckbox.addEventListener('change', disableOrEnableDiscountInput);

form.addEventListener('change', () => {
  calculateTotalPriceForProduct(count, price);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newProduct = Object.fromEntries(formData);

  addNewProduct(newProduct);
  createRow(newProduct);
  calculateTotalPrice();
  resetForm();
  closeModal();
});
