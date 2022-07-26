 function displayCart(){
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector('.products');

    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
        console.log('running');
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="./images/${item.tag}.jpg" width="600px" height="100px">
                <span>${item.name}</span>
            </div>
            <div class="price">&#8377;${item.price}.00</div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">
            &#8377;${item.inCart * item.price}.00
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    &#8377;${cartCost}.00
                </h4>

        `
    }

}
displayCart();