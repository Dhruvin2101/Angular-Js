let bg = document.getElementById("main");
let input = document.getElementById("color_name");
let go = document.getElementById("go");
let number_input = document.getElementById("number_input");
let submit = document.getElementById("submit");

go.addEventListener("click", function(event){
    event.preventDefault();
        bg.style.backgroundColor = input.value;
})

number_input.addEventListener("input", function(event){
    event.preventDefault();
    if(Number(number_input.value.length) === 10){
        bg.style.backgroundColor = "green";
    }
    else{
        bg.style.backgroundColor = "red";
    }
})