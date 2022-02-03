const openPopup = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const closePopup = document.getElementById("close");
const login = document.getElementById("login");
var id1 = document.getElementById("Premium1");
var id2 = document.getElementById("Premium2");
var id3 = document.getElementById("Premium3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

openPopup.addEventListener("click", () => {
    modal_container.classList.add("show");
    console.log("Click Open");
});

closePopup.addEventListener("click", () => {
    modal_container.classList.remove("show");
    console.log("Click Close");
});

login.addEventListener("click", () =>{
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t");
    if (id1.classList.contains("card_disabled")){
        id1.classList.remove("card_disabled");
        id1.classList.add("card");
        btn1.removeAttribute("disabled", "disabled");
    }
    if (id2.classList.contains("card_disabled")){
        id2.classList.remove("card_disabled");
        id2.classList.add("card");
        btn2.removeAttribute("disabled", "disabled");
    }
    if (id3.classList.contains("card_disabled")){
        id3.classList.remove("card_disabled");
        id3.classList.add("card");
        btn3.removeAttribute("disabled", "disabled");
    }
});