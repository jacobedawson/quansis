import Scroll from 'scroll-js';
const scrollMonitor = require('scrollmonitor');

const pageSelectButtons = [...document.querySelectorAll('[data-scrollto]')];

pageSelectButtons.forEach(el => {
    const target = document.getElementById(`${el.dataset.scrollto}`);
    el.addEventListener('click', () => {
        const scroll = new Scroll(document.documentElement.scrollTop > 0 ? document.documentElement : document.body);
        scroll.toElement(target, {
            easing: 'easeInOutCubic',
            duration: 750
        })
        .then(bodyClassToggle(el.dataset.scrollto))
        .then(toggleSelectedMenu(el));
    });
});

// Call this on scroll as well to match scroll position
function toggleSelectedMenu(el) {
    pageSelectButtons.forEach(button => button.classList.remove('selected'));
    el.classList.add('selected');
}

const footer = document.querySelector('footer');
const nav = document.querySelector('nav');
function bodyClassToggle(name) {
    if (name.match(/^page-(3|4|6|7|9|x)$/)) {
        nav.classList.add('dark'); 
        footer.classList.add('dark');
    } else {
        nav.classList.remove('dark');
        footer.classList.remove('dark');
    }
}


const spans = [...document.querySelectorAll('.in-viewport')];

spans.forEach(s => {
    const spanWatcher = scrollMonitor.create(s);

    spanWatcher.fullyEnterViewport(() => {
        const activeID = s.id.slice(0,6);
        const menuItem = document.querySelector('[data-scrollto=' + `${activeID}` + ']');
        toggleSelectedMenu(menuItem);
        bodyClassToggle(activeID);
    });
})

