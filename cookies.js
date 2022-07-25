let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Unibic Choco Nut Cookies',
        tag: 'unibic-choco-cookies',
        price: 102,
        inCart: 0
    },
    {
        name: 'Britannia Tiger Krunch Chocochips Biscuit',
        tag: 'tiger-krunch',
        price: 148,
        inCart: 0
    },
    {
        name: 'Parle-G Gold Glucose Biscuit 1 Kg',
        tag: 'parle-gold',
        price: 140,
        inCart: 0
    },
    {
        name: 'Britannia Little Hearts Classic Biscuit',
        tag: 'little-hearts',
        price: 10,
        inCart: 0
    },
    {
        name: 'Sunfeast Dark Fantasy Yumfills Choco Fills',
        tag: 'dark-fantasy-cake',
        price: 91,
        inCart: 0
    },
    {
        name: 'Cadbury Oreo Dipped Chocolate Biscuit',
        tag: 'oreo-dipped',
        price: 116,
        inCart: 0
    },
    {
        name: 'Dukes Waffy Strawberry Wafer Roll',
        tag: 'strawberry-waffy',
        price: 102,
        inCart: 0
    },
    {
        name: 'Tiffany Crunch n Cream Wafer Bar - Chocolate',
        tag: 'creamncrunch',
        price: 100,
        inCart: 0
    },
    {
        name: 'Winkies Rich Butter Fruit Cake',
        tag: 'winkies-fruit-cake',
        price: 125,
        inCart: 0
    },
    {
        name: 'Britannia Pineapple Plunge Fruit Cake',
        tag: 'britannia-fruit-cake',
        price: 15,
        inCart: 0
    },
    {
        name: 'English Oven Garlic Bread',
        tag: 'garlic-bread',
        price: 35,
        inCart: 0
    },
    {
        name: 'Dabur Keora Water Essence',
        tag: 'water-essence',
        price: 59,
        inCart: 0
    },
    {
        name: 'Timios Mini Oats Bites Baby Food',
        tag: 'timios-oats-bites',
        price: 121,
        inCart: 0
    },
    {
        name: 'Puramate Vanilla Oven Cake Mix',
        tag: 'oven-mix-cake',
        price: 130,
        inCart: 0
    },
    {
        name: 'Sunfeast Farmlite 5 Grain Digestive Biscuit',
        tag: 'sunfeast-digestive',
        price: 126,
        inCart: 0
    },
    {
        name: 'Bauli Spyroll Puff Roll 10 pieces - Pack of 10',
        tag: 'spyroll',
        price: 102,
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
