function add (a,b){
    return a+b
}
function substract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

let num1,sign,num2

function operate(a,sign,b){
    if(sign=='+') {
        add(a,b)
    }
    else if(sign=='-'){
        substract(a,b)
    }
    else if (sign=='x'){
        multiply(a,b)
    }
    else if(sign=="/"){
        divide(a,b)
    }
}