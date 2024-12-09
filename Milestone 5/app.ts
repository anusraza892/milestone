
// interface Product {
//     name: string;
//     quantity: number;
//     price: number;
// }

// // Define an array of products
// const addproducts: Product[] = [
//     { name: 'Sunglasses', quantity: 10, price: 25.00 },
//     { name: 'Watch', quantity: 5, price: 30.00 },
//     { name: 'Valet', quantity: 9, price: 15.00 },
//     { name: 'Ring', quantity: 30, price: 10.00 },
//     { name: 'Bag', quantity: 18, price: 28.00 },
//     { name: 'Shoes', quantity: 29, price: 36.00 },
//     { name: 'Mobile', quantity: 40, price: 80.00 },
//     { name: 'Dress', quantity: 10, price: 15.00 },
//     { name: 'Laptop', quantity: 50, price: 105.00 }
// ];

// // Function to populate the table with products
// function populateTable(products: Product[]): void {
//     const tableBody = document.getElementById('product-table-body') as HTMLTableSectionElement;
//     tableBody.innerHTML = ''; // Clear existing rows

//     products.forEach(product => {
//         const row = document.createElement('tr');
        
//         const nameCell = document.createElement('td');
//         nameCell.textContent = product.name;
//         row.appendChild(nameCell);

//         const quantityCell = document.createElement('td');
//         quantityCell.textContent = product.quantity.toString();
//         row.appendChild(quantityCell);

//         const priceCell = document.createElement('td');
//         priceCell.textContent = `$${product.price.toFixed(2)}`;
//         row.appendChild(priceCell);

//         tableBody.appendChild(row);
//     });
// }

// // Function to validate inputs
// function validateProduct(name: string, quantity: string, price: string): boolean {
//     if (!name.trim()) {
//         alert('Product name cannot be empty.');
//         return false;
//     }

//     const quantityNum = parseInt(quantity, 10);
//     if (isNaN(quantityNum) || quantityNum <= 0) {
//         alert('Quantity must be a positive number.');
//         return false;
//     }

//     const priceNum = parseFloat(price);
//     if (isNaN(priceNum) || priceNum <= 0) {
//         alert('Price must be a valid number greater than 0.');
//         return false;
//     }

//     return true;
// }

// // Function to add a new product
// function addProduct(): void {
//     const nameInput = document.getElementById('product-name') as HTMLInputElement;
//     const quantityInput = document.getElementById('product-quantity') as HTMLInputElement;
//     const priceInput = document.getElementById('product-price') as HTMLInputElement;

//     const name = nameInput.value;
//     const quantity = quantityInput.value;
//     const price = priceInput.value;

//     if (validateProduct(name, quantity, price)) {
//         const newProduct: Product = {
//             name: name,
//             quantity: parseInt(quantity, 10),
//             price: parseFloat(price)
//         };

//         products.push(newProduct);
//         populateTable(products);

//         // Clear input fields
//         nameInput.value = '';
//         quantityInput.value = '';
//         priceInput.value = '';
//     }
// }

// // Event listener for the Add Product button
// const addButton = document.getElementById('add-product-button') as HTMLButtonElement;
// addButton.addEventListener('click', addProduct);

// // Initial population of the table
// populateTable(products);


interface Product {
    name: string;
    quantity: number;
    price: number;
}

// Define an array of products
const products: Product[] = [
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
function populateTable(products: Product[]): void {
    const tableBody = document.getElementById('product-table-body') as HTMLTableSectionElement;
    tableBody.innerHTML = ''; // Clear existing rows

    products.forEach(product => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${product.price.toFixed(2)}`;
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    });
}

// Function to validate inputs
function validateProduct(name: string, quantity: string, price: string): boolean {
    if (!name.trim()) {
        alert('Product name cannot be empty.');
        return false;
    }

    const quantityNum = parseInt(quantity, 10);
    if (isNaN(quantityNum) || quantityNum <= 0) {
        alert('Quantity must be a positive number.');
        return false;
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
        alert('Price must be a valid number greater than 0.');
        return false;
    }

    return true;
}

// Function to add a new product
function Product(): void {
    const nameInput = document.getElementById('product-name') as HTMLInputElement;
    const quantityInput = document.getElementById('product-quantity') as HTMLInputElement;
    const priceInput = document.getElementById('product-price') as HTMLInputElement;

    const name = nameInput.value;
    const quantity = quantityInput.value;
    const price = priceInput.value;

    if (validateProduct(name, quantity, price)) {
        const newProduct: Product = {
            name: name,
            quantity: parseInt(quantity, 10),
            price: parseFloat(price)
        };

        products.push(newProduct);  // Make sure `products` is consistent with the array name
        populateTable(products);

        // Clear input fields
        nameInput.value = '';
        quantityInput.value = '';
        priceInput.value = '';
    }
}

// Event listener for the Add Product button
const addButton = document.getElementById('add-product-button') as HTMLButtonElement;
addButton.addEventListener('click', addProduct);

// Initial population of the table
populateTable(products);
