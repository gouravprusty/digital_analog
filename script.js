let ss = 0;
let mm = 0;
let hh = 0;

// Reset 'ss' every 60 seconds and increment 'mm'
setInterval(() => {
    ss = 0;
    mm += 1;

    // Reset 'mm' every 60 minutes and increment 'hh'
    if (mm === 60) {
        mm = 0;
        hh += 1;

        // Reset 'hh' every 12 hours
        if (hh === 12) {
            hh = 0;
        }
    }
}, 61000);

// Increment 'ss' every second
setInterval(() => {
    ss += 1;
}, 1000);

// Select the containers
let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");

// Create and store 13 'p' elements for seconds
let secondElements = [];
for (let i = 0; i < 13; i++) {
    let second_nums = document.createElement("p");
    second.append(second_nums);
    secondElements.push(second_nums);
}

// Create and store 10 'p' elements for minutes
let minuteElements = [];
for (let i = 0; i < 10; i++) {
    let minute_nums = document.createElement("p");
    minute.append(minute_nums);
    minuteElements.push(minute_nums);
}

// Create and store 5 'p' elements for hours
let hourElements = [];
for (let i = 0; i < 5; i++) {
    let hour_nums = document.createElement("p");
    hour.append(hour_nums);
    hourElements.push(hour_nums);
}

// Single interval to update all elements
setInterval(() => {
    // Update all second elements
    secondElements.forEach(el => el.innerHTML = ss < 10 ? "0" + ss : ss);

    // Update all minute elements
    minuteElements.forEach(el => el.innerHTML = mm < 10 ? "0" + mm : mm);

    // Update all hour elements
    hourElements.forEach(el => el.innerHTML = hh < 10 ? "0" + hh : hh);
}, 1000);