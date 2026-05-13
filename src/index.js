import './style.css';

import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import loadContact from './contact';


function setActive(button) {
    document.querySelectorAll('nav button').forEach(btn=>
        btn.classList.remove('active')
    );
    button.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');


    function loadPage(loader) {
        content.innerHTML = '';
        loader();
    }

    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    const contactBtn = document.getElementById('contact-btn');

    loadHome();
    setActive(homeBtn);

    homeBtn.addEventListener('click', () => {
        loadPage(loadHome);
        setActive(homeBtn);
    });

    menuBtn.addEventListener('click', () => {
        loadPage(loadMenu);
        setActive(menuBtn);
    });

    aboutBtn.addEventListener('click', () => {
        loadPage(loadAbout);
        setActive(aboutBtn);
    });

    contactBtn.addEventListener('click', () => {
        loadPage(loadContact);
        setActive(contactBtn);
    });
});
