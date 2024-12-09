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
function populateTable(products) {
    var tableBody = document.getElementById('product-table-body');
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
populateTable(products);
