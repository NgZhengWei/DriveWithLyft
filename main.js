let arrayColFaq = document.querySelectorAll(".col-faq");

arrayColFaq.forEach(item => {
    item.addEventListener("click", () => {
        toggleDisplay(item);
    })
})

function toggleDisplay(item){
    item.querySelector(".faq-p").classList.toggle("display");

    if (item.querySelector(".faq-icon").innerHTML.includes("minus")) {
        item.querySelector(".faq-icon").innerHTML = "<i class='fas fa-plus-circle fa-2x'></i>";
    }else {
        item.querySelector(".faq-icon").innerHTML = "<i class='fas fa-minus-circle fa-2x'></i>";
    }
}