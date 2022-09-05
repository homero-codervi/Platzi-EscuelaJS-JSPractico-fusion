
const emailObject = document.querySelector('.navbar-email');
const menuBurguer = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');


const INACTIVE = 'inactive';

emailObject.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu( event ){
    desktopMenu.classList.toggle( INACTIVE );
    
}

function toggleMobileMenu( event ){
    console.log( "Click on the Burguer" );
    let result = mobileMenu.classList.toggle( INACTIVE );
    
}