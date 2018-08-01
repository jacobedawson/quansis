import Scroll from 'scroll-js';
import scrollMonitor from 'scrollmonitor';
const modals = require('./js/modals');
const translation = require('./js/translation');

let currentPage = 'page-1';
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

document.getElementById('scroll-more').addEventListener('click', () => {
    const scroll = new Scroll(document.documentElement.scrollTop > 0 ? document.documentElement : document.body);
    let nextPage = currentPage === 'page-9' ? 'page-x' :  currentPage.slice(0,5) + (+currentPage.slice(-1) + 1);
    const scrollTo = document.getElementById(nextPage);
    scroll.toElement(scrollTo, {
        easing: 'easeInOutCubic',
        duration: 750
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
        const activeID = currentPage = s.id.slice(0,6);
        const menuItem = document.querySelector('[data-scrollto=' + `${activeID}` + ']');
        toggleSelectedMenu(menuItem);
        bodyClassToggle(activeID);
        hideElements(activeID);
    });
})

