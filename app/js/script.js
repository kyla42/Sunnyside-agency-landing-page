const hbBtn = document.getElementById("hbBtn");
const menu = document.getElementById("menu");

hbBtn.addEventListener("click", function () {
    menu.classList.toggle("active");

    window.addEventListener("resize", function () {
        menu.classList.remove("active");
    })
});