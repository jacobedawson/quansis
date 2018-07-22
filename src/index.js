import Scroll from 'scroll-js';

const scrollButtons = [...document.querySelectorAll('[data-scrollto]')];
const scroll = new Scroll(document.documentElement.scrollTop > 0 ? document.documentElement : document.body)

scrollButtons.forEach((el, i) => {
    console.log(el.dataset.scrollto);
    const target = document.getElementById(`${el.dataset.scrollto}`);
    console.log(target);
    el.addEventListener('click', () => {
        scroll.toElement(target);
    });
});