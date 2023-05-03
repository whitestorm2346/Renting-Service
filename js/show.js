function display(obj, id) {
    var o = document.getElementById(id);
    if (o.style.display == 'none') {
        o.style.display = '';
    }
    else {
        o.style.display = 'none';
    }
}
function show(obj, id) {
    var o = document.getElementById(id);

    if (o.className == 'content') {
        o.className = 'show-content';
    }
    else if (o.className == 'show-content') {
        o.className = 'content';
    }
}