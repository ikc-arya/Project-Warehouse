let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Amul Gold Full Cream Fresh Milk',
        tag: 'Amul-Gold-Milk',
        price: 30,
        inCart: 0
    },
    {
        name: 'Amul Taaza Toned Fresh Milk',
        tag: 'Amul-Taaza-Toned-Fresh-Milk',
        price: 25,
        inCart: 0
    },
    {
        name: 'Amul Desi Cow Fresh Milk',
        tag: 'Amul-Cow-Fresh-Milk',
        price: 26,
        inCart: 0
    },
    {
        name: 'Amul Moti Toned Milk',
        tag: 'Amul-Moti-Toned-Milk',
        price: 30,
        inCart: 0
    },
    {
        name: 'Yakult Probiotic Health Drink',
        tag: 'Yakult',
        price: 80,
        inCart: 0
    },
    {
        name: 'Nestle a+ Nourish Toned Milk',
        tag: 'Nestle-Nourish-Toned-Milk',
        price: 85,
        inCart: 0
    },
    {
        name: 'Mother Dairy Fit Lite Double Toned Milk',
        tag: 'Fit-Lite-Toned-Milk',
        price: 30,
        inCart: 0
    },
    {
        name: 'Yakult Lite Probiotic Health Drink',
        tag: 'Yakult-Lite',
        price: 95,
        inCart: 0
    },
    {
        name: 'Nescafe Iced Latte Cold Coffee',
        tag: 'Iced-Latte-Cold-Coffee',
        price: 129,
        inCart: 0
    },
    {
        name: 'Table White Eggs',
        tag: 'eggs',
        price: 233,
        inCart: 0
    },
    {
        name: 'Hersheys Chocolate Milk Shake ',
        tag: 'Hersheys-Milk-Shake',
        price: 63,
        inCart: 0
    },
    {
        name: 'Mother Dairy Ultimate Curd',
        tag: 'Ultimate-Dahi',
        price: 50,
        inCart: 0
    },
    {
        name: 'Harvest Gold Hearty Brown Bread',
        tag: 'Brown-Bread',
        price: 45,
        inCart: 0
    },
    {
        name: 'Harvest Gold White Bread',
        tag: 'White-Bread',
        price: 50,
        inCart: 0
    },
    {
        name: 'Amul Pizza Mozzarella Cheese Block',
        tag: 'Amul-Pizza-Cheese',
        price: 108,
        inCart: 0
    },
    {
        name: 'Mother Dairy Cheese Cubes',
        tag: 'Cheese-Cubes',
        price: 125,
        inCart: 0
    },
    {
        name: 'Delicious Amul Fresh Cream',
        tag: 'Amul-Fresh-Cream',
        price: 65,
        inCart: 0
    },
    {
        name: 'Gowardhan Premium Cow Ghee',
        tag: 'Ghee',
        price: 325,
        inCart: 0
    }
]

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', () => {
        console.log('Added to cart!');
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.nav-link sup span').innerHTML = productNumbers;
    }
}

function cartNumbers(products){
    // console.log('The product clicked is: ', products);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.nav-link sup span').innerHTML = productNumbers + 1;
    } 
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav-link sup span').innerHTML = 1;
    }

    setItems(products);
}

function setItems(product){
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;

    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }
    }

    localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
}

function totalCost(product){
    // console.log('The product price is: ', product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log('My cartCost is: ', cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else{
        localStorage.setItem('totalCost', product.price);
    }
}

onLoadCartNumbers();
