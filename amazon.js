
let productsHTML = '';


product.forEach((product) => {
    productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-discription">
        ${product.discription}
        </div>

        <div class="product-spacer"></div>

    </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; 

        let matchingItem;

        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item;

            }
        });

        if(matchingItem){
            matchingItem.quantity++;
        }
        else{
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

        console.log(cart);
        console.log(cartQuantity);
    });
});