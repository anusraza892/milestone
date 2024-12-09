// Define an array of products
var products = [
    { name: 'Sunglasses', quantity: 10, price: 25.00 },
    { name: 'Watch', quantity: 5, price: 30.00 },
    { name: 'Valet', quantity: 9, price: 15.00 },
    { name: 'Ring', quantity: 30, price: 10.00 },
    { name: 'Bag', quantity: 18, price: 28.00 },
    { name: 'Shoes', quantity: 29, price: 36.00 },
    { name: 'Mobile', quantity: 40, price: 80.00 },
    { name: 'Dress', quantity: 10, price: 15.00 },
    { name: 'Laptop', quantity: 50, price: 105.00 }
];
// Function to populate the table with products
function populateTable(products) {
    var tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = ''; // Clear existing rows
    products.forEach(function (product) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        var quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement('td');
        priceCell.textContent = "$".concat(product.price.toFixed(2));
        row.appendChild(priceCell);
        tableBody.appendChild(row);
    });
}
// Function to validate inputs
function validateProduct(name, quantity, price) {
    if (!name.trim()) {
        alert('Product name cannot be empty.');
        return false;
    }
    var quantityNum = parseInt(quantity, 10);
    if (isNaN(quantityNum) || quantityNum <= 0) {
        alert('Quantity must be a positive number.');
        return false;
    }
    var priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
        alert('Price must be a valid number greater than 0.');
        return false;
    }
    return true;
}
// Function to add a new product
function addProduct() {
    var nameInput = document.getElementById('product-name');
    var quantityInput = document.getElementById('product-quantity');
    var priceInput = document.getElementById('product-price');
    var name = nameInput.value;
    var quantity = quantityInput.value;
    var price = priceInput.value;
    if (validateProduct(name, quantity, price)) {
        var newProduct = {
            name: name,
            quantity: parseInt(quantity, 10),
            price: parseFloat(price)
        };
        products.push(newProduct);
        populateTable(products);
        // Clear input fields
        nameInput.value = '';
        quantityInput.value = '';
        priceInput.value = '';
    }
}
// Event listener for the Add Product button
var addButton = document.getElementById('add-product-button');
addButton.addEventListener('click', addProduct);
// Initial population of the table
populateTable(products);
