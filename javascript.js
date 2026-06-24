function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

let num1 = '', sign, num2 = '', ans

function operate(first, sign, second) {
    a = Number(first)
    b = Number(second)
    if (sign == '+') {
        ans = add(a, b)
    }
    else if (sign == '-') {
        ans = substract(a, b)
    }
    else if (sign == 'x') {
        ans = multiply(a, b)
    }
    else if (sign == "/") {
        ans = divide(a, b)
    }
}
function update() {
    const numClick = document.querySelectorAll(".btn")
    const display = document.querySelector('.display')
    const opClick = document.querySelectorAll('.one')
    k = ''
    f = false
    numClick.forEach(button => {


        button.addEventListener("click", function (event) {
            
            t=this.textContent
            if(t=='clear'){
                num1=''
                sign=undefined
                num2=''
                display.textContent=''
            }
            else{

            if (!f) {

                if (num1 != 'clear') {
                    num1 += this.textContent
                    display.textContent = num1
                }
            }
            else {

                if (num2 != 'clear') {
                
                    num2 += this.textContent
                    display.textContent = num2
                    operate(num1, sign, num2)
                   
                }
            }
        }

        })




    })


    opClick.forEach(opBtn => {
        opBtn.addEventListener("click", function (event) {
             k = this.textContent

            if(sign!=undefined && k!='='){
                display.textContent=ans
                num1 = ans
                num2 = ''
            }

           
            if(k=='=' ){
                if(num2!=''){
                display.textContent = ans 
                num1=ans
                num2=''
                sign=undefined
                f=true
                }
                else {
                    display.textContent="ERR"
                     f=false
                    num1 = ''
                    sign = undefined
                    num2 = ''
                }
               
            }
            else{sign = k
            f = true
            }
           // display.textContent = sign


        })
    })


}


update()
