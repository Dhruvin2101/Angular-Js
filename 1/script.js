let bg = document.getElementById("main");
let input = document.getElementById("color_name");
let submit = document.getElementById("submit");

submit.addEventListener("click", function(event){
    event.preventDefault();
        bg.style.backgroundColor = input.value;
})