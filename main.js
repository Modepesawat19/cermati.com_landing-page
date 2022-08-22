let cookieModal = document.querySelector(".popup")
let closeCookieBtn = document.querySelector(".close-btn")
let acceptCookiebtn = document.querySelector(".btn-count")
let closingCookiebtn = document.querySelector(".content-panel")

closingCookiebtn.addEventListener("click", function (){
    cookieModal.classList.add("active")
    localStorage.setItem("cookieCancel","acceptCookie")
    
})


acceptCookiebtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccept", "yes")
})

closeCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
})

setTimeout(function (){
    let cookieAccept = localStorage.getItem("cookieAccept")
    if (cookieAccept != "yes"){
    cookieModal.classList.add("active")
    }
},6000)
