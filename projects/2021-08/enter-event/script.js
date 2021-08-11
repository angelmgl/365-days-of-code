let myText = document.getElementById("my-text");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

myText.addEventListener("keyup", (e) => {
    e.preventDefault();

    // 13 is the keyCode of Enter key
    if (e.keyCode === 13) {
        btn.click();
    }
});

btn.addEventListener("click", (e) => {
    let item = document.createElement("li");
    item.textContent = myText.value;
    list.appendChild(item);

    myText.value = "";
});
