function removeElementsByClassName(names) {
    let els = document.getElementsByClassName(names),
        i, element;
    for (i = els.length - 1; i >= 0; i -= 1) {
        element = els[i];
        element.parentElement.removeChild(element);
    }
}

removeElementsByClassName('otPlaceholder');
removeElementsByClassName('adsenvelope-skeleton');
removeElementsByClassName('adsenvelope');
removeElementsByClassName('box-over-content-revive');