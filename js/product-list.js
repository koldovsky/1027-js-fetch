// fetch('api/products.json')
//     .then( response => response.json() )
//     .then( products => renderProducts(products) );

const response = await fetch('api/products.json');
const products = await response.json();
renderProducts(products, 1);

function renderProducts(products, rate) {
    const productList = document.querySelector('.products__list');
    productList.innerHTML = '';
    
    for (const product of products) {
        productList.innerHTML += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-card__h3">${product.name}</h3>
            <p class="product-card__description">
            ${product.description}
            </p>
            <div class="product-card__buttons">
            <button class="product-card__buttons-info button button-card">
            Info
            </button>
            <button class="product-card__buttons-buy button button-card">
            Buy - ${(product.price * rate).toFixed(2)}
            </button>
            </div>
        </article>`;
    }
}

let rates;
async function changeCurrency() {
    if (!rates) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        rates = (await response.json()).rates;
    }
    const currentCurrency = document.querySelector('.products__currency').value;
    const rate = rates[currentCurrency];
    renderProducts(products, rate);
}

document.querySelector('.products__currency').addEventListener('change', changeCurrency);