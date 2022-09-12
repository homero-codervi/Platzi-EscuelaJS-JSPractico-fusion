
const emailObject = document.querySelector('.navbar-email');
const menuBurguer = document.querySelector('.menu');
const menuShoppingCar = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');



const INACTIVE = 'inactive';

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