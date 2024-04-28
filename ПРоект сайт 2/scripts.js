// Array of product objects with image URLs
const products = [
    { name: 'RTX 3080', imageUrl: 'rtx3080.png' },
    { name: 'RX 6800 XT', imageUrl: 'rx6800xt.png' },
    { name: 'Intel Xe', imageUrl: 'intelxe.png' }
];

// Function to dynamically load product images
function loadProducts() {
    const productsSection = document.getElementById('products-section');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        
        const productImage = document.createElement('img');
        productImage.src = `images/${product.imageUrl}`;
        productImage.alt = product.name;
        
        productDiv.appendChild(productName);
        productDiv.appendChild(productImage);
        
        productsSection.appendChild(productDiv);
    });
}

// Call the function to load products when the page loads
window.onload = loadProducts;
