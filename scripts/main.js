const btns = document.querySelectorAll('.open_form');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.callback_form');

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        overlay.style.display = 'flex';
        body.style.overflow  = 'hidden';
    })
});
form.addEventListener('click', function (e) {
    e.stopPropagation();
});
overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
});