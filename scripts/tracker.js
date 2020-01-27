document.querySelectorAll('.tomato-click').forEach(item => {
    item.addEventListener('click', function (e) {
        let tomato = (e.target.tagName == "path") ? e.target.parentElement : e.target;

        // add ripe class to SVG
        tomato.classList.toggle("ripe");
    }, false);
})