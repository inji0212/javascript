const PageState = function () {
    let currentState = new HomeState(this);

    this.change = function (state) {
        currentState = state;
    }

    this.init = function () {
        currentState
    }
};

// Home State
const HomeState = function (page) {
    document.querySelector('#heading').textContent = 'Home';
};

// About State
const AboutState = function (page) {
    document.querySelector('#heading').textContent = 'About';
};

// Contact State
const ContactState = function (page) {
    document.querySelector('#heading').textContent = 'Contact';
};


const page = new PageState();
page.init();

// UI Vars
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
    page.change(new HomeState);

    e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
    page.change(new AboutState);

    e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
    page.change(new ContactState);

    e.preventDefault();
});