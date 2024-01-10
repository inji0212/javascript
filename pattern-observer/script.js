const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');

function sendToGoogleAnalytics(data) {
    console.log('Sent to Google analytics: ', data);
}

function sendToCustomAnalytics(data) {
    console.log('Sent to custom analytics: ', data);
}

function sendToEmail(data) {
    console.log('Sent to email: ', data);
}

const observers = [];
const Observer = Object.freeze({
    notify: (data) => observers.forEach((observer) => observer(data)),
    subscribe: (func) => observers.push(func),
    unsubscribe: (func) => {
        [...observers].forEach((observer, index) => {
            if (observer === func) {
                observers.splice(index, 1);
            }
        });
    },
});

Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);

pinkBtn.addEventListener('click', () => {
    const data = '🎀 Click on pink button! 🎀';
    Observer.notify(data);

});

blueBtn.addEventListener('click', () => {
    const data = '🦋 Click on blue button! 🦋';
    Observer.notify(data);
});


