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
    deci=false
    deci2=false
    numClick.forEach(button => {


        button.addEventListener("click", function (event) {
           
            
            t=this.textContent
            if(t=='clear'){
                num1=''
                sign=undefined
                num2=''
                display.textContent=''
                deci=false
                deci2=false
                 
            }
            
            else{

            if (!f) {

                if (t != '.') {
                    num1 += this.textContent
                    display.textContent = num1
                }
                else {
                    if(!deci){
                        deci=true
                         num1 += this.textContent
                    display.textContent = num1
                
                    }
                    
                    
                }
            }
            else {
                 

                if (t!='.') {
                
                    num2 += this.textContent
                    display.textContent = num2
                    operate(num1, sign, num2)
                   
                }
                else{
                      if(!deci2){

                        deci2=true
                         num2 += this.textContent
                    display.textContent = num2
                    
                    }
                    

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
                deci=false
                deci2=false
            }

           
            if(k=='=' ){
                if(num2!='' && ans!=Infinity){
                display.textContent = ans 
                num1=ans
                num2=''
                sign=undefined
                f=true
                deci=false
                deci2=false
                }
                else {
                    display.textContent="ERR"
                     f=false
                    num1 = ''
                    sign = undefined
                    num2 = ''
                    deci=false
                    deci2=false
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
