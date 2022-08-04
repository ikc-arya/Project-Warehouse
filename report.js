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
                <span>${item.name}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    Total Amount
                </h4>
                <h4 class="basketTotal">
                    &#8377;${cartCost}.00
                </h4>

        `
    }
}

    let date = document.getElementById('date');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    date.innerHTML += today;


    let due_date = document.getElementById('due_date');
    let due = 0 + String(Number(mm) + 1);
    due_date.innerHTML += dd + '/' + due + '/' + yyyy;


displayCart();