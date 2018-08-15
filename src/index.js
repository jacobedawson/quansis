import Scroll from 'scroll-js';
import scrollMonitor from 'scrollmonitor';
const modals = require('./js/modals');
const translation = require('./js/translation');

document.addEventListener('DOMContentLoaded', () => {

const body = document.querySelector('body');
const footer = document.querySelector('footer');
const nav = document.querySelector('nav');
const scrollMore = document.getElementById('scroll-more');

if (window.localStorage.getItem('quansis-color') === 'dark') {
    body.classList.add('dark');
} else {
    body.classList.remove('dark');
}

let currentPage = 'page-1';
const pageSelectButtons = [...document.querySelectorAll('[data-scrollto]')];

document.getElementById('scrollTop').addEventListener('click', () => {
    const scroll = new Scroll(document.documentElement.scrollTop > 0 ? document.documentElement : document.body);
    scroll.to(0,0);
})

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

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        scrollJack('up');
    }
    if (e.key === 'ArrowDown') {
        scrollJack('down');
    }
});

function scrollJack(direction) {
    const scroll = new Scroll(document.documentElement.scrollTop > 0 ? document.documentElement : document.body);
    if (direction === 'down') {
        if (currentPage === 'page-x') return;
        let nextPage = (currentPage === 'page-9') ? 'page-x' :  currentPage.slice(0,5) + (+currentPage.slice(-1) + 1);
        const scrollTo = document.getElementById(nextPage);
        scroll.toElement(scrollTo, {
            easing: 'easeInOutCubic',
            duration: 750
        });
    } else {
        if (currentPage === 'page-1') return;
        let nextPage = (currentPage === 'page-x') ? 'page-9' : currentPage.slice(0,5) + (+currentPage.slice(-1) - 1);
        const scrollTo = document.getElementById(nextPage);
        scroll.toElement(scrollTo, {
            easing: 'easeInOutCubic',
            duration: 750
        });
    }
}

// Call this on scroll as well to match scroll position
function toggleSelectedMenu(el) {
    if (body.classList.contains('no-scroll')) return;
    pageSelectButtons.forEach(button => button.classList.remove('selected'));
    el.classList.add('selected');
}

function bodyClassToggle(name) {
    if (body.classList.contains('no-scroll')) return;
    if (name.match(/^page-(2|4|5|7|9|x)$/)) {
        nav.classList.add('dark'); 
        footer.classList.add('dark');
        scrollMore.classList.add('dark');
        body.classList.add('dark');
        window.localStorage.setItem('quansis-color', 'dark');
    } else {
        nav.classList.remove('dark');
        footer.classList.remove('dark');
        scrollMore.classList.remove('dark');
        body.classList.remove('dark');
        window.localStorage.removeItem('quansis-color', 'dark');
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

// isScrolling
let isScrolling;
window.addEventListener('scroll', e => {
    window.clearTimeout(isScrolling);
    document.getElementById('scroll-more').style.opacity = 0;
    isScrolling = setTimeout(() => {
        document.getElementById('scroll-more').style.opacity = 100;
    }, 400);
}, false);

// scroll wheel direction

body.addEventListener('wheel', scrollDirection);
function scrollDirection(event) {
    if (body.classList.contains('no-scroll')) return;
    let delta;
    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else { 
        delta = (-1 * event.deltaY);
    }
    if (delta < 0) {
        scrollJack('down');
    } else if (delta > 0) {
        scrollJack('up');
    }
}

// Mobile touch
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
let xDown = null;                                                        
let yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}                                                     

function handleTouchStart(evt) {                                         
    xDown = getTouches(evt)[0].clientX;                                      
    yDown = getTouches(evt)[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( !xDown || !yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

        if ( yDiff > 0 ) {
            /* up swipe */ 
            scrollJack('down');
        } else { 
            /* down swipe */
            scrollJack('up');
        }                 
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


// Mobile Menu Toggle
const mobileMenuOpen = document.querySelector('.mobile-menu-open');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuOpen.addEventListener('click', e => {
    mobileMenu.classList.add('visible');
});
mobileMenuClose.addEventListener('click', e => {
    mobileMenu.classList.remove('visible');
});

});