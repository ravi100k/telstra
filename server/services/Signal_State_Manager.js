const active_signal_color = { active: 'red' };
let interval = 5000;

function counter() {
    setTimeout(updateFunction, interval);
};

function updateFunction() {
    if (active_signal_color.active === 'red') {
        interval = 10000; // interval betwwen yellow -> green
        active_signal_color.active = 'yellow';
    } else if (active_signal_color.active === 'yellow') {
        interval = 15000; // interval betwwen green -> red
        active_signal_color.active = 'green';
    } else if (active_signal_color.active === 'green') {
        interval = 5000;  // interval betwwen red -> yellow
        active_signal_color.active = 'red';
    } else {
        active_signal_color.active = 'red';
    }
    counter();
};


module.exports = { counter, active_signal_color };