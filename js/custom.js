// sidemenu toggle
const toggleButton = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const backTick = document.querySelector('.backtick');
const sideMenuLink = document.querySelectorAll('.side-menu--top li');
const openMenu = () => {
    sideMenu.classList.add('open');
    backTick.classList.add('open');
    document.body.style.overflow = 'hidden';
};
const closeMenu = () => {
    sideMenu.classList.remove('open');
    backTick.classList.remove('open');
    document.body.style.overflow = 'visible';
};
toggleButton.addEventListener('click', openMenu);
toggleButton.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        openMenu();
    }
});
backTick.addEventListener('click', closeMenu);
sideMenuLink.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// scrollTo
const menuContainer = document.querySelector('.content__menu');
const contactContainer = document.querySelector('.footer__main');
const toMenuButton = document.querySelector('.to-menu');
const toContactButton = document.querySelector('.to-contact');
const scrollToMenu = () => {
    menuContainer.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};
const scrollToContact = () => {
    contactContainer.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};
toMenuButton.addEventListener('click', scrollToMenu);
toContactButton.addEventListener('click', scrollToContact);

// form
const form = document.querySelector('.reservation-form');
const handleSubmit = (e) => {
    e.preventDefault();
    const email = form.querySelector('[name=email]');
    const date = form.querySelector('[name=date]');
    const hour = form.querySelector('[name=hour]');
    const persons = form.querySelector('[name=persons]');
    const reservationContainer = document.querySelector('.header__reservation--bottom');
    const confirmText = `<h3 class="confirm">Bedankt voor je aanvraag voor ${persons.value} personen, op ${date.value} om ${hour.value}u.<br>
                        We bevestigen zo spoedig mogelijk op emailadres ${email.value}.</h3>`;
    reservationContainer.innerHTML = confirmText;
}
form.addEventListener('submit', handleSubmit);