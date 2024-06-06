const icon1 = document.querySelector('.fa-laugh');
const icon2 = document.querySelector('.fa-smile');
const icon3 = document.querySelector('.fa-meh');
const icon4 = document.querySelector('.fa-frown');
const icon5 = document.querySelector('.fa-sad-tear');

const icons = [icon1, icon2, icon3, icon4, icon5];

// Load moods from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    loadMoods();
});

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
        saveMoods();
    });
}

// Save moods to local storage
function saveMoods() {
    const moods = {};
    days.forEach((day, index) => {
        for (let i = 0; i < icons.length; i++) {
            if (day.classList.contains('icon' + (i + 1))) {
                moods[index] = 'icon' + (i + 1);
            }
        }
    });
    localStorage.setItem('moods', JSON.stringify(moods));
}

// Load moods from local storage
function loadMoods() {
    const savedMoods = localStorage.getItem('moods');
    if (savedMoods) {
        const moods = JSON.parse(savedMoods);
        Object.keys(moods).forEach(index => {
            days[index].classList.add(moods[index]);
        });
    }
}

// Reset all moods
function resetMoods() {
    days.forEach(day => {
        for (let i = 0; i < icons.length; i++) {
            day.classList.remove('icon' + (i + 1));
        }
    });
    localStorage.removeItem('moods');
}

// Add reset button functionality
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.classList.add('resetBtn');
resetButton.addEventListener('click', resetMoods);
document.body.appendChild(resetButton);
