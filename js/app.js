// Global variables
var items = [...groceryItems];
var editId = null;

// Add Item Function
function addItem(name) {
  var newId = String(Date.now());
  var newItem = {
    id: newId,
    name: name,
    completed: false
  };
  items.push(newItem);
  render();
  setTimeout(function () {
    alert("Item Added Successfully!");
  }, 0);
}

// Remove Item Function
function removeItem(itemId) {
  items = $.grep(items, function (item) {
    return item.id !== itemId;
  });
  render();
  setTimeout(function () {
    alert("Item Deleted Successfully!");
  }, 0);
}

// Update Item Name Function
function updateItemName(newName) {
  items = $.map(items, function (item) {
    if (item.id === editId) {
      return $.extend({}, item, { name: newName });
    }
    return item;
  });
  editId = null;
  render();
  setTimeout(function () {
    alert("Item Updated Successfully!");
  }, 0);
}

// Toggle Item Completed Function
function toggleItemCompleted(itemId) {
  items = $.map(items, function (item) {
    if (item.id === itemId) {
      return $.extend({}, item, { completed: !item.completed });
    }
    return item;
  });
  render();
}

// Set Edit ID Function
function setEditId(itemId) {
  editId = itemId;
  render();

  // Focus input after render
  setTimeout(function () {
    $(".form-input").focus();
  }, 0);
}

// Render App
function render() {
  var $app = $("#app");
  $app.empty();

  var itemToEdit = editId
    ? $.grep(items, function (item) {
        return item.id === editId;
      })[0]
    : null;
  var $formElement = createForm(editId, itemToEdit);
  var $itemsElement = createItems(items);

  $app.append($formElement);
  $app.append($itemsElement);
}

// Initialize App
$(document).ready(function () {
  render();
});