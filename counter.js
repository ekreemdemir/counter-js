let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')
let resetDOM = document.querySelector('#reset')

counterDOM.innerHTML = counter

increaseDOM.addEventListener('click', clickEvent)
decreaseDOM.addEventListener('click', clickEvent)
resetDOM.addEventListener('click', clickEvent)

function clickEvent(){
    // if (this.id == "increase"){
    //     counterDOM.innerHTML = counter += 1
    // } else {
    //     counterDOM.innerHTML = counter -= 1
    // }

    //----------------------if'in daha kısa hali-------------------------------

    // this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counterDOM.innerHTML = counter -= 1 

    // ---------------------- veya -------------------------
    
    this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counter -= 1
    this.id == "reset" ? counterDOM.innerHTML = counter = 0 :
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}