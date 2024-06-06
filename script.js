let string = "";
let buttons = document.querySelectorAll("button");
let screen = document.querySelector("input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "C"){
            string = string.slice(0, -1);
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "OFF"){
            string = "Power Off";
            document.querySelector("input").value = string;
            setTimeout(() => {
            string = "";
            document.querySelector("input").value = string;
            },1000);
        }else{
            string = string + e.target.innerHTML;document.querySelector("input").value = string;
        }
    });
});