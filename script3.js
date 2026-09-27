const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
}

const loginTab = document.querySelector("#login-tab");
const signupTab = document.querySelector("#signup-tab");
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");

if (loginTab && signupTab && loginForm && signupForm) {
    loginTab.addEventListener("click", () => {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    });

    signupTab.addEventListener("click", () => {
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });
}

if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });
}