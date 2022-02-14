// :: Search Area
var search = document.getElementById('search'),
    searchWrapper = document.getElementById('search-wrapper'),
    closeIcon = document.getElementById('close-icon');
    search.onfocus = function () {
    searchWrapper.classList.add('search-expanded');
    this.addEventListener('transitionend', function () {
        closeIcon.style.display = 'block';
    });
}
search.onblur = function () {
    searchWrapper.classList.remove('search-expanded');
    closeIcon.classList.add('closing');
    this.addEventListener('transitionend', function () {
        closeIcon.classList.remove('closing');
        closeIcon.style.display = 'none';
    });
}
closeIcon.onclick = function () {
    this.classList.add('closing');
    document.activeElement.blur();
    setTimeout(function () {
        closeIcon.classList.remove('closing');
    }, 1000);
}
