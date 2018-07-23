import Scroll from 'scroll-js';

const scrollButtons = [...document.querySelectorAll('[data-scrollto]')];

scrollButtons.forEach(el => {
    const target = document.getElementById(`${el.dataset.scrollto}`);
    el.addEventListener('click', () => {
        const scroll = new Scroll(document.documentElement.scrollTop > 0 ? document.documentElement : document.body);
        scroll.toElement(target, {
            easing: 'easeInOutCubic',
            duration: 750
        }).then(bodyClassToggle(el.dataset.scrollto));
    });
});

const footer = document.querySelector('footer');
function bodyClassToggle(name) {
    if (name.match(/^page-(3|4|6|7|9|10)$/)) {
        footer.classList.add('dark');
    } else {
        footer.classList.remove('dark');
    }
}