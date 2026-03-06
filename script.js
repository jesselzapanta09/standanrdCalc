const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function developer(){
    alert("Developer Information\n\nName: Jessel Zapanta\nRole: Programmer\nTechnology: HTML, CSS, JavaScript");
}

function about(){
    alert("Application Information\n\nWeb Calculator\nVersion 1.0\nSimulates Windows Calculator with additional features.");
}