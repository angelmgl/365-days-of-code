const cardNumber = document.getElementById("cardNumber");

// function for showing correct logo
cardNumber.addEventListener("input", showLogo);

// function to add spaces every 4 numbers
cardNumber.addEventListener("input", function (e) {
    let target = e.target,
        position = target.selectionEnd,
        length = target.value.length;

    target.value = target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    target.selectionEnd = position +=
        target.value.charAt(position - 1) === " " &&
        target.value.charAt(length - 1) === " " &&
        length !== target.value.length
            ? 1
            : 0;
});

function showLogo() {
    const defaultLogo = document.querySelector(".default");
    const visaLogo = document.querySelector(".visa");
    const masterLogo = document.querySelector(".mastercard");

    if (!cardNumber.value) return;

    if (cardNumber.value.indexOf("5") === 0) {
        defaultLogo.style.display = "none";
        visaLogo.style.display = "none";
        masterLogo.style.display = "block";
    } else if (cardNumber.value.indexOf("4") === 0) {
        defaultLogo.style.display = "none";
        masterLogo.style.display = "none";
        visaLogo.style.display = "block";
    } else {
        masterLogo.style.display = "none";
        visaLogo.style.display = "none";
        defaultLogo.style.display = "block";
    }
}