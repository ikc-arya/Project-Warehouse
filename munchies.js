let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Peppy Tomato Discs Crisps - Pack of 2',
        tag: 'peppy',
        price: 78,
        inCart: 0
    },
    {
        name: 'Lays Sizzling Hot Potato Chips',
        tag: 'lays-spicy',
        price: 19,
        inCart: 0
    },
    {
        name: 'Jacker Sour Cream & Onion Potato Chips',
        tag: 'jacker',
        price: 200,
        inCart: 0
    },
    {
        name: 'Kurkure Masala Munch Crisps',
        tag: 'kurkure-orange',
        price: 20,
        inCart: 0
    },
    {
        name: 'Lays Crispz Herb & Onion Potato Chips',
        tag: 'lays-cripsz',
        price: 20,
        inCart: 0
    },
    {
        name: 'Lays Spanish Tomato Tango Potato Chips',
        tag: 'lays-tomato',
        price: 20,
        inCart: 0
    },
    {
        name: 'Salsalito Regular Taco Shells',
        tag: 'taco-shells',
        price: 180,
        inCart: 0
    },
    {
        name: 'Cornitos Nachos & Salsa Combo',
        tag: 'nachos-2',
        price: 108,
        inCart: 0
    },
    {
        name: 'Cornitos Nacho Crisps & Dip Combo',
        tag: 'nachos-1',
        price: 63,
        inCart: 0
    },
    {
        name: 'Snackible Peri Peri Ragi Chips',
        tag: 'peri-peri-ragi-chips',
        price: 50,
        inCart: 0
    },
    {
        name: 'Piknik Classic Tomato Chilli Potato Chips - Pack of 2',
        tag: 'piknik',
        price: 78,
        inCart: 0
    },
    {
        name: 'Wingreens Farms Appitas Baked Pita Jalapeno Chips',
        tag: 'appitas',
        price: 76,
        inCart: 0
    },
    {
        name: 'Parle Cream & Onion Potato Chips (Celebration Pack)',
        tag: 'parle-wafers',
        price: 59,
        inCart: 0
    },
    {
        name: 'Bingo Yumitos Chilli Sprinkled Potato Chips (Buy 3 Get 1 Free)',
        tag: 'bingo-chilli',
        price: 60,
        inCart: 0
    },
    {
        name: 'Lays Indian Masala Magic Flavor Potato Chips - Pack of 2',
        tag: 'lays-blue',
        price: 39,
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
