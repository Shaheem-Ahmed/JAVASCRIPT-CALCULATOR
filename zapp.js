var getValue = document.getElementById("inputDisplay");


function CalculatorButtons(num){
    getValue.value +=num; 
}

function answer(){
    getValue.value = eval(getValue.value)
}

function RemoveText(){
        var arr = getValue.value.split("");
        arr[arr.length - 1] = "";
        getValue.value = arr.join("");
}
function removeText(){
    getValue.value = ""
}