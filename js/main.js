
import {calculateTotalPrice, products} from './modal/mainTable.js';
import {renderGoods, addClassToRow} from './modal/createElem.js';
import {discountInput} from './modal/modal.js';


const init = () => {
  discountInput.disabled = true;

  renderGoods(products);
  addClassToRow();
  calculateTotalPrice();
};

init();
