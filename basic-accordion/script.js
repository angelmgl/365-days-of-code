const tabs = document.querySelectorAll(".accordion-tab");

tabs.forEach(tab => tab.addEventListener("click", () => {
    const tabActive = document.querySelector(".active");
    if(tabActive && tabActive !== tab) tabActive.classList.remove("active");

    tab.classList.toggle("active");
}));