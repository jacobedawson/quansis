if (window.localStorage.getItem('quansis-lang') === 'en') {
    toggleLanguage('en');
    document.getElementById('select-en').classList.add('selected');
} else {
    document.getElementById('select-de').classList.add('selected');
}

function toggleLanguage(lang) {
    if (lang === 'en') {
        document.querySelectorAll('[lang="en"]').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('[lang="de"]').forEach(el => {
            el.style.display = 'none';
        });
        window.localStorage.setItem('quansis-lang', 'en');
    } else {
        document.querySelectorAll('[lang="en"]').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('[lang="de"]').forEach(el => {
            el.style.display = 'block';
        });
        window.localStorage.setItem('quansis-lang', 'de');
    }
}

function toggleSelected(el) {
    document.querySelectorAll('.language-select-toggle').forEach(x => x.classList.remove('selected'));
    el.classList.add('selected');
}

document.querySelectorAll('.language-select-toggle').forEach(el => {
    el.addEventListener('click', () => {
        toggleLanguage(el.id.slice(-2));
        toggleSelected(el);
    });
});