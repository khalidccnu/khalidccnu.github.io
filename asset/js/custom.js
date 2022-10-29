// ===== Preloader =====
function preloader() {
    let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isChrome) {
        document.getElementsByClassName("infinity")[0].classList.add("hidden");
        document.getElementsByClassName("infinity-chrome")[0].classList.remove("hidden");
    }

    setTimeout(function() {
        document.getElementById("preloader").classList.add("hidden");
    }, 350);
}

// ===== Dark Mode =====
let tmSwitch = document.getElementById("tm-switch");
let userTheme = localStorage.getItem("theme");
let sysTheme = matchMedia("(prefers-color-scheme: dark)").matches;

// Theme Check
function theme_check() {
    if (userTheme === "dark" || (!userTheme && sysTheme)) {
        document.documentElement.classList.add("dark");
        tmSwitch.classList.replace("bxs-moon", "bxs-sun");
    } else {
        tmSwitch.classList.replace("bxs-sun", "bxs-moon");
    }
}

// Theme Switch
tmSwitch.addEventListener("click", function() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        this.classList.replace("bxs-sun", "bxs-moon");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        this.classList.replace("bxs-moon", "bxs-sun");
        localStorage.setItem("theme", "dark");
    }
});

// ===== Header / Navbar Toggle =====
function navbar_toggle(collapseID) {
    let cID = document.getElementById(collapseID);
    let navbarTI = document.querySelector(".navbar-toggler-icon");

    cID.classList.toggle("hidden");

    if (!cID.classList.contains("hidden")) navbarTI.classList.replace("bx-menu", "bx-menu-alt-right");
    else navbarTI.classList.replace("bx-menu-alt-right", "bx-menu");
}

// ===== Project / Lazy Loading =====
const img = document.querySelectorAll("#project img");
const imgOption = {};

const observer = new IntersectionObserver(function(e, o) {
    e.forEach(function(e) {
        if (!e.isIntersecting) return;

        let img = e.target;

        img.src = img.getAttribute("data-src");
        o.unobserve(img);
    });
}, imgOption);

img.forEach(function(e) {
    observer.observe(e);
});

// ===== Reload =====
function reload() {
    location.reload();
}

// ===== Initial Load =====
theme_check();