let ss = 0;
let mm = 0;
let hh = 0;

setInterval(() => {
    ss = 0;
    mm += 1;

    if (mm === 60) {
        mm = 0;
        hh += 1;

        if (hh === 12) {
            hh = 0;
        }
    }
}, 61000);

setInterval(() => {
    ss += 1;
}, 1000);

let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");

let secondElements = [];
for (let i = 0; i < 13; i++) {
    let second_nums = document.createElement("p");
    second.append(second_nums);
    secondElements.push(second_nums);
}

let minuteElements = [];
for (let i = 0; i < 10; i++) {
    let minute_nums = document.createElement("p");
    minute.append(minute_nums);
    minuteElements.push(minute_nums);
}

let hourElements = [];
for (let i = 0; i < 5; i++) {
    let hour_nums = document.createElement("p");
    hour.append(hour_nums);
    hourElements.push(hour_nums);
}

setInterval(() => {
    secondElements.forEach(el => el.innerHTML = ss < 10 ? "0" + ss : ss);

    minuteElements.forEach(el => el.innerHTML = mm < 10 ? "0" + mm : mm);

    hourElements.forEach(el => el.innerHTML = hh < 10 ? "0" + hh : hh);
}, 1000);