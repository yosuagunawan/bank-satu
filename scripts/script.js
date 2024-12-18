var products = [
    { name: "Produk A", category: "Elektronik", stock: 50, price: 1000000, location: "Gudang A", code: "PRD001", supplier: "supplier@example.com" },
    { name: "Produk B", category: "Elektronik", stock: 30, price: 500000, location: "Gudang B", code: "PRD002", supplier: "supplier2@example.com" },
    { name: "Produk C", category: "Elektronik", stock: 20, price: 1500000, location: "Gudang C", code: "PRD003", supplier: "supplier3@example.com" },
    { name: "Produk E", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
    { name: "Produk F", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
    { name: "Produk G", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
    { name: "Produk H", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
    { name: "Produk I", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
    { name: "Produk J", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
    { name: "Produk K", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
    { name: "Produk L", category: "Elektronik", stock: 40, price: 2000000, location: "Gudang D", code: "PRD004", supplier: "supplier4@example.com" },
];

function renderProducts() {
    const productCards = document.querySelector('.product-cards');
    productCards.innerHTML = '';

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.width = '18rem';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Kategori: ${product.category}</p>
                <p class="card-text">Stok: ${product.stock}</p>
                <p class="card-text">Harga: Rp ${product.price.toLocaleString()}</p>
                <p class="card-text">Lokasi: ${product.location}</p>
                <p class="card-text">Kode Produk: ${product.code}</p>
                <p class="card-text">Supplier: ${product.supplier}</p>
                <button class="btn btn-success" onclick="fillForm(${index})">Perbarui</button>
                <button class="btn btn-danger" onclick="deleteProduct(${index})">Hapus</button>
            </div>
        `;
        productCards.appendChild(card);
    });
}

function fillForm(index) {
    const product = products[index];

    document.getElementById('name').value = product.name;
    document.getElementById('category').value = product.category;
    document.getElementById('stock').value = product.stock;
    document.getElementById('price').value = product.price;
    document.getElementById('location').value = product.location;
    document.getElementById('code').value = product.code;
    document.getElementById('supplier').value = product.supplier;

    document.getElementById('index').value = index;
}

function updateProduct() {
    const index = document.getElementById('index').value;
    if (index === '') return;
    
    const updatedProduct = {
        name: document.getElementById('name').value,
        category: document.getElementById('category').value,
        stock: parseInt(document.getElementById('stock').value),
        price: parseInt(document.getElementById('price').value),
        location: document.getElementById('location').value,
        code: document.getElementById('code').value,
        supplier: document.getElementById('supplier').value
    };

    products[index] = updatedProduct;
    renderProducts();
    clearForm();
}

function deleteProduct(index) {
    if (products.length <= 1) {
        alert('Produk tidak dapat dihapus karena hanya tersisa satu produk.');
        return;
    }
    
    if (confirm('Apakah yakin produk dihapus?')) {
        products.splice(index, 1);
        renderProducts();
        clearForm();
    }
}

function clearForm() {
    document.getElementById('product-form').reset();
    document.getElementById('index').value = '';
}

function moveCarousel(direction) {
    var container = document.getElementsByClassName('product-cards')[0];
    var scrollAmount = 300;
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

window.onload = function () {
    renderProducts();
    var hiddenIndexInput = document.createElement('input');
    hiddenIndexInput.type = 'hidden';
    hiddenIndexInput.id = 'index';
    document.getElementById('product-form').appendChild(hiddenIndexInput);

    // Added
    document.querySelector('.carousel-button.prev').addEventListener('click', () => moveCarousel(-1));
    document.querySelector('.carousel-button.next').addEventListener('click', () => moveCarousel(1));
};
