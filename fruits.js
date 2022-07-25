let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Mint Leaves',
        tag: 'mint-leaves',
        price: 23,
        inCart: 0
    },
    {
        name: 'Baby Onion',
        tag: 'baby-onion',
        price: 7,
        inCart: 0
    },
    {
        name: 'Baby Potato',
        tag: 'baby-potato',
        price: 17,
        inCart: 0
    },
    {
        name: 'Banana',
        tag: 'banana',
        price: 22,
        inCart: 0
    },
    {
        name: 'Cherry Tomato',
        tag: 'cherry-tomato',
        price: 70,
        inCart: 0
    },
    {
        name: 'Organic Chilli',
        tag: 'chilli-organically-grown',
        price: 7,
        inCart: 0
    },
    {
        name: 'Coriander Bunch',
        tag: 'coriander-bunch',
        price: 11,
        inCart: 0
    },
    {
        name: 'Corn Cob',
        tag: 'corn-cob',
        price: 23,
        inCart: 0
    },
    {
        name: 'Cucumber',
        tag: 'cucumber',
        price: 29,
        inCart: 0
    },
    {
        name: 'Dried Apricots',
        tag: 'dried-apricots',
        price: 281,
        inCart: 0
    },
    {
        name: 'Garlic',
        tag: 'garlic',
        price: 22,
        inCart: 0
    },
    {
        name: 'Green Capsicum',
        tag: 'green-capsicum',
        price: 25,
        inCart: 0
    },
    {
        name: 'Iceberg Lettuce',
        tag: 'iceberg-lettuce',
        price: 64,
        inCart: 0
    },
    {
        name: 'Kiwi',
        tag: 'kiwi',
        price: 109,
        inCart: 0
    },
    {
        name: 'Lemon',
        tag: 'lemon',
        price: 19,
        inCart: 0
    },
    {
        name: 'Mango',
        tag: 'mango',
        price: 104,
        inCart: 0
    },
    {
        name: 'Mushroom Packet',
        tag: 'mushroom-packet',
        price: 48,
        inCart: 0
    },
    {
        name: 'Muskmelon',
        tag: 'muskmelon',
        price: 90,
        inCart: 0
    },
    {
        name: 'Papaya',
        tag: 'papaya',
        price: 107,
        inCart: 0
    },
    {
        name: 'Peach',
        tag: 'peach',
        price: 79,
        inCart: 0
    },
    {
        name: 'Red Apple',
        tag: 'red-delicious-apple-imported',
        price: 214,
        inCart: 0
    },
    {
        name: 'Round Gourd',
        tag: 'round-gourd',
        price: 23,
        inCart: 0
    },
    {
        name: 'Tender Coconut',
        tag: 'tender-coconut',
        price: 65,
        inCart: 0
    },
    {
        name: 'Thompson Grapes',
        tag: 'thompson-grapes',
        price: 125,
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

