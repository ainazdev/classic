const acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const btn=document.querySelector(".just-btn button")
btn.addEventListener("click",()  =>{
    document.querySelector(".about-modal").style.display = "block"
})
const close=document.querySelector(".just-modal-bg-square-close")
close.addEventListener("click",()  =>{
    document.querySelector(".about-modal").style.display = "none"
})