const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
}

function addOne(button, price) {
    const card = button.closest(".products");
    const qtyInput = card.querySelector(".qty-input");
    const totalInput = card.querySelector(".total-input");

    let currentQty = parseInt(qtyInput.value) || 0;
    currentQty += 1;

    qtyInput.value = currentQty;
    totalInput.value = currentQty * price;
}

function subtractOne(button, price) {
    const card = button.closest(".products");
    const qtyInput = card.querySelector(".qty-input");
    const totalInput = card.querySelector(".total-input");

    let currentQty = parseInt(qtyInput.value) || 0;
    if (currentQty > 0) {
        currentQty -= 1;
        qtyInput.value = currentQty;
        totalInput.value = currentQty * price;
    }
}

function saveCartAndProceed(event) {
    const productCards = document.querySelectorAll(".products");
    const cart = [];

    productCards.forEach((card) => {
        const qty = parseInt(card.querySelector(".qty-input").value) || 0;
        if (qty > 0) {
            const name = card.querySelector(".name").innerText.replace("Name: ", "").trim();
            const price = parseInt(card.querySelector(".price").innerText.replace("Price: $", "").trim()) || 0;
            const rank = card.querySelector(".rank").innerText.replace("Rank: ", "").trim();
            
            cart.push({
                name: name,
                price: price,
                qty: qty,
                rank: rank,
                total: price * qty
            });
        }
    });

    localStorage.setItem("toolix_cart", JSON.stringify(cart));
}

function renderSalesSummary() {
    const salesList = document.getElementById("sales-list");
    const grandTotalVal = document.getElementById("grand-total-val");

    if (!salesList || !grandTotalVal) return;

    const storedCart = localStorage.getItem("toolix_cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];

    if (cart.length === 0) {
        salesList.innerHTML = `<div class="empty-msg">No items selected in cart.</div>`;
        grandTotalVal.innerText = "$0";
        return;
    }

    let grandTotal = 0;
    salesList.innerHTML = "";

    cart.forEach(item => {
        grandTotal += item.total;
        const itemElement = document.createElement("div");
        itemElement.className = "summary-item";
        itemElement.innerHTML = `
            <div class="item-info">
                <span class="item-name">${item.name}</span>
                <span class="item-details">Rank ${item.rank} | $${item.price} x ${item.qty}</span>
            </div>
            <span class="item-total">$${item.total}</span>
        `;
        salesList.appendChild(itemElement);
    });

    grandTotalVal.innerText = "$" + grandTotal;
}

function executeFinalConfirm() {
    const storedCart = localStorage.getItem("toolix_cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];

    if (cart.length === 0) {
        alert("Your sales summary is empty!");
        return;
    }

    alert("Sale Confirmed Successfully!");
    localStorage.removeItem("toolix_cart");
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    renderSalesSummary();
});