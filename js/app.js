import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let items = groceryItems;

// Render App
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function addItem(itemName) {
  var newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };
  items.push(newItem);
  render();
  setTimeout(function () {
    alert("Item Added Successfully!");
  }, 0);
}

function render() {
  var $app = $("#app");
  $app.empty();

  var $formElement = createForm();
  var $itemsElement = createItems(items);

  $app.append($formElement);
  $app.append($itemsElement);
}


// Initialize App
render();
function removeItem(itemId) {
  items = $.grep(items, function (item) {
    return item.id !== itemId;
  });
  render();
  setTimeout(function () {
    alert("Item Deleted Successfully!");
  }, 0);
}