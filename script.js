const nav_btn = document.querySelector(".nav-btn")
const form = document.querySelector(".form");
const closeBtn = document.querySelector(".close-btn")

nav_btn.addEventListener("click", () => {
    form.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    form.classList.remove("active")
})
