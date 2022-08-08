function initLs(key, initValue) {
    var lsItem = localStorage.getItem(key);
    var returned;
    if (lsItem) {
        returned = lsItem;
    } else {
        localStorage.setItem(key, initValue);
        returned = initValue;
    }

    return returned;
}

function setLs(key, value) {
    localStorage.setItem(key, value);
}