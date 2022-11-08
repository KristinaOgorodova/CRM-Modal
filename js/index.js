'use strict';

const header = document.querySelector('.add-product');
const discountCheckbox = document.querySelector('#discount');
const discountQty = document.querySelector('#number');
const totalSum = document.querySelector('.add-form__amount');
const form = document.querySelector('.add');

const addCardBtn = document.querySelector('.table-select__add-btn');
const modal = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.add-product__close-btn')

addCardBtn.addEventListener('click', () => {
  modal.classList.add('overlay_open');
});

modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('overlay_open');
});

form.addEventListener('click', event => {
  event.stopPropagation();
})

modal.addEventListener('click', ()=> {
  modal.classList.remove('overlay_open');
});







