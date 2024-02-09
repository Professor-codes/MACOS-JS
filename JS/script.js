let menu = document.querySelector(".container");
let icons = document.querySelectorAll('.app');

let max_zoom = 'scale(1.4) translateY(-1.2vw)';
let half_zoom = 'scale(1.1) translateY(-1vw)';
let mini_zoom = 'scale(0.8) translateY(-0.5vw)';
let micro_zoom = 'scale(1) translateY(0)';

icons.forEach((icon, index) => {
    icons[index].addEventListener('mouseover', function (os) {
        let first = index + 1;
        let second = index - 1;
        let firsts = index + 2;
        let secondt = index - 2;
        menu.style.gap = '0.7vw';

        if (os.target == icons[0]) {
            this.style.transform = max_zoom;
            icons[first].style.transform = half_zoom;
            icons[firsts].style.transform = mini_zoom;
        } else if (os.target == icons[icons.length - 1]) {
            this.style.transform = max_zoom;
            icons[second].style.transform = half_zoom;
            icons[secondt].style.transform = mini_zoom;
        } else {
            this.style.transform = max_zoom;
            icons[second].style.transform = half_zoom;
            icons[first].style.transform = half_zoom;
            icons[secondt].style.transform = mini_zoom;
            icons[firsts].style.transform = mini_zoom;
        }
    });

    icons[index].addEventListener('mouseout', function () {
        icons.forEach((icon1, hideIndex) => {
            icons[hideIndex].style.transform = micro_zoom;
        });
        menu.style.gap = '0vw';
    });

    icons[index].addEventListener('touchmove', function (move) {
        let first = index + 1;
        let second = index - 1;
        let firsts = index + 2;
        let secondt = index - 2;

        menu.style.gap = '0.7vw';

        if (move.target == icons[0]) {
            this.style.transform = max_zoom;
            icons[first].style.transform = half_zoom;
            icons[firsts].style.transform = mini_zoom;
        } else if (move.target == icons[icons.length - 1]) {
            this.style.transform = max_zoom;
            icons[second].style.transform = half_zoom;
            icons[secondt].style.transform = mini_zoom;
        } else {
            this.style.transform = max_zoom;
            icons[second].style.transform = half_zoom;
            icons[first].style.transform = half_zoom;
            icons[secondt].style.transform = mini_zoom;
            icons[firsts].style.transform = mini_zoom;
        }
    });

    icons[index].addEventListener('touchend', function () {
        icons.forEach((icon1, hideIndex) => {
            icons[hideIndex].style.transform = micro_zoom;
        });
        menu.style.gap = '0vw';
    });
});