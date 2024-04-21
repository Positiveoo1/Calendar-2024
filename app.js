const icon1 = document.querySelector('.fa-laugh');
const icon2 = document.querySelector('.fa-smile');
const icon3 = document.querySelector('.fa-meh');
const icon4 = document.querySelector('.fa-frown');
const icon5 = document.querySelector('.fa-sad-tear');

const icons = [icon1, icon2, icon3, icon4, icon5];

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function () {
        for (let j = 0; j < icons.length; j++) {
            if (i !== j) {
                icons[j].classList.remove('icon' + (j + 1));
            }
        }
        icons[i].classList.toggle('icon' + (i + 1));
    });
}

const days = document.querySelectorAll('.day');

for (let i = 0; i < days.length; i++) {
    days[i].addEventListener('click', function () {
        for (let j = 0; j < icons.length; j++) {
            if (icons[j].classList.contains('icon' + (j + 1))) {
                days[i].classList.remove('icon' + (j + 1));
            }
        }
        for (let k = 0; k < icons.length; k++) {
            if (icons[k].classList.contains('icon' + (k + 1))) {
                days[i].classList.add('icon' + (k + 1));
            }
        }
    });
}
