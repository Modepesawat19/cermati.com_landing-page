
let cookieModal = document.querySelector(".popup")
let closeCookieBtn = document.querySelector(".close-btn")
let countCookiebtn = document.querySelector(".btn-count")

countCookiebtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccept", "yes")
})

closeCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccept", "tooglePopup")
})


setTimeout(function (){
    cookieModal.classList.add("active")
},6000)