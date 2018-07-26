import Scroll from 'scroll-js';
import scrollMonitor from 'scrollmonitor';
const modals = require('./js/modals');


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
const scrollMore = document.getElementById('scroll-more');
function bodyClassToggle(name) {
    if (name.match(/^page-(3|4|6|7|9|x)$/)) {
        nav.classList.add('dark'); 
        footer.classList.add('dark');
        scrollMore.classList.add('dark');
    } else {
        nav.classList.remove('dark');
        footer.classList.remove('dark');
        scrollMore.classList.remove('dark');
    }
}

function hideElements(name) {
    // hide the page select on page 1
    if (name.includes('page-1')) {
        // hide the page select
        document.getElementById('page-select').style.display = 'none';
    } else {
        document.getElementById('page-select').style.display = 'flex';
    }
    // hide the scroll more on page 10
    if (name.includes('page-x')) {
        // hide the scroll more
        document.getElementById('scroll-more').style.display = 'none';
    } else {
        document.getElementById('scroll-more').style.display = 'flex';
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
        hideElements(activeID);
    });
})

