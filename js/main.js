
const emailObject = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const INACTIVE = 'inactive';

console.log(emailObject);
emailObject.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle(INACTIVE)
    console.log("Click on the email");
}