
main_field();
show_field();
function main_field() {
    pic_click();
    seting();
    day_night();
}
function show_field() {
    showField_click();
    lr_arrow_click();
}
function day_night() { }

function pic_click() {
    let pics = document.querySelectorAll('.rside img');
    let pic_open = document.querySelector('.show');
    let pic = document.querySelector('.show img');
    for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener('click', () => {
            pic_open.style.zIndex = '1';
            pic_open.style.opacity = '1';
            pic.setAttribute('src', pics[i].getAttribute('src'));
            localStorage.setItem('pic_sort', i);
            console.log(typeof (localStorage.getItem('pic_sort')));
        });

    }
}
function seting() { }
function showField_click() {
    let pic_close = document.querySelector('.show');
    pic_close.addEventListener('click', () => {
        pic_close.style.zIndex = '-1';
        pic_close.style.opacity = '0';
    });
}
function lr_arrow_click() {
    let pic_left = document.querySelector('.left');
    let pic_right = document.querySelector('.right');
    let pic = document.querySelector('.show img');
    let pics = document.querySelectorAll('.rside img');
    pic_left.addEventListener('click', (e) => {
        let pic_sort = localStorage.getItem('pic_sort');
        if (Number(pic_sort == 0)) {
            localStorage.setItem('pic_sort', pics.length - 1);
        }
        else {
            localStorage.setItem('pic_sort', Number(pic_sort) - 1);
        }
        pic_sort = localStorage.getItem('pic_sort');
        pic.setAttribute('src', pics[pic_sort].getAttribute('src'))
        console.log(pics[pic_sort].getAttribute('src'));
        e.stopPropagation();
    });
    pic_right.addEventListener('click', (e) => {
        let pic_sort = localStorage.getItem('pic_sort');
        if (Number(pic_sort == pics.length - 1)) {
            localStorage.setItem('pic_sort', 0);
        }
        else {
            localStorage.setItem('pic_sort', Number(pic_sort) + 1);
        }
        pic_sort = localStorage.getItem('pic_sort');
        pic.setAttribute('src', pics[pic_sort].getAttribute('src'))
        console.log(pics[pic_sort].getAttribute('src'));
        e.stopPropagation();
    });
}