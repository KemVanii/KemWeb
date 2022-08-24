function changeImg () {
    let img = document.querySelector('img');
        let start = img.src;
        let hover = img.getAttribute('data-hover'); //specified in img tag

        img.onmouseover = () => { img.src = hover; }
        img.onmouseout = () => { img.src = start; }
}
function scroll_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}