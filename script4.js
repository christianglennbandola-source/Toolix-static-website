const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        faqItems.forEach((i) => i.classList.remove("open"));

        if (!isOpen) {
            item.classList.add("open");
        }
    });
});

const inqSubmit = document.querySelector("#inq-submit");
const inqSuccess = document.querySelector("#inq-success");

if (inqSubmit) {
    inqSubmit.addEventListener("click", () => {
        const name = document.querySelector("#inq-name").value.trim();
        const email = document.querySelector("#inq-email").value.trim();
        const subject = document.querySelector("#inq-subject").value.trim();
        const message = document.querySelector("#inq-message").value.trim();

        if (!name || !email || !subject || !message) {
            inqSuccess.style.color = "#ff6b6b";
            inqSuccess.innerText = "Please fill in all fields before sending.";
            return;
        }

        inqSuccess.style.color = "#7fffb0";
        inqSuccess.innerText = "Message sent! We will get back to you shortly.";

        document.querySelector("#inq-name").value = "";
        document.querySelector("#inq-email").value = "";
        document.querySelector("#inq-subject").value = "";
        document.querySelector("#inq-message").value = "";

        setTimeout(() => {
            inqSuccess.innerText = "";
        }, 5000);
    });
}
