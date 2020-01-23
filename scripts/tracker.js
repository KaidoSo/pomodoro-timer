document.getElementById("tomato").addEventListener("click", function (e) {
    let target = e.target;

    target.classList.toggle("iconize");
    target.classList.toggle("iconize2");
}, false);