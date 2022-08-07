let cookieModal = document.querySelector(".sliding-panel")

let countCookiebtn = document.querySelector(".btn-count")



countCookiebtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccept", "yes")
})


setTimeout(function (){
    cookieModal.classList.add("active")
},2000)