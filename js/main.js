//Constantes
const MONEY_CURRENCY = "$";
const ICON_SHOPPING_CART = "./icons/bt_add_to_cart.svg";
const INACTIVE = 'inactive';

//Selectores
const emailObject = document.querySelector('.navbar-email');
const menuBurguer = document.querySelector('.menu');
const menuShoppingCar = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');
const container = document.querySelector(".cards-container");

//Variables
const productsList = [];

//Listeners
emailObject.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuShoppingCar.addEventListener('click', toggleShoppingCar);

function toggleDesktopMenu( event ){
    console.log( "Click on the menu email" );
    let result = desktopMenu.classList.toggle( INACTIVE );
    if( !result ){
        productDetail.classList.add( INACTIVE );
    }
}

function toggleMobileMenu( event ){
    console.log( "Click on the Burguer" );
    mobileMenu.classList.toggle( INACTIVE );
    if( !productDetail.classList.contains(INACTIVE)){
        productDetail.classList.toggle( INACTIVE )
    }
}

function toggleShoppingCar( event ){
    console.log( "Click on the shopping cart" );
    let result = productDetail.classList.toggle( INACTIVE );
    if( !result ){
        desktopMenu.classList.add( INACTIVE );
        mobileMenu.classList.add( INACTIVE );
    }
}


function createProductListDummy(){
    for(let i = 0 ; i<20; i++){
        productsList.push({
            name:`Bike ${i}`,
            price: i*500,
            urlImage:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        });
    }
}

function validateProductListDummy(){
    for(item of productsList){
        console.log(`The ${item.name} costs ${item.price}`);
    }
    
    for(counter in productsList){
        console.log(`The counter: ${counter} `);
    }
}

function populateProductList(){
    createProductListDummy();
    for(product of productsList){
        const productCard = document.createElement('div');
        const img = document.createElement('img');
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');
        const priceInfo = document.createElement('p');
        const nameInfo = document.createElement('p');
        const figure = document.createElement('figure');
        const imgIcon = document.createElement('img');

        img.setAttribute('src', product.urlImage);
        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');
        priceInfo.innerText = `${MONEY_CURRENCY} ${product.price}` ;
        nameInfo.innerText = product.name;
        imgIcon.setAttribute('src', ICON_SHOPPING_CART);

    
        productInfoDiv.append(priceInfo, nameInfo);
        figure.appendChild(imgIcon);
        productInfo.append(productInfoDiv,figure);
        productCard.append(img, productInfo);
        container.appendChild(productCard);
    }
}

populateProductList();