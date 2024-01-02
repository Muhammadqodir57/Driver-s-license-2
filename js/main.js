let elInput = document.getElementById('input');
let elBtn = document.getElementById('btn');
let elResult = document.getElementById('result');

elBtn.addEventListener('click', function() {
    let inputValue = elInput.value

    if(inputValue >=18) {
        elResult.textContent = 'Siz prava olaolasiz'
    }  else {
        elResult.textContent = `Siz prava olaolmesiz  xali ${ 18-inputValue
           
        } yil bor`
    }
})

// let elInput = document.getElementById('input');
// let elBtn = document.getElementById('btn');

// elBtn.addEventListener('click', function() {
//     let inputValue = elInput.value

//     if(inputValue <= 2000) {
//         console.log("Siz 20chi asrda tug'ilgansiz")
//     } else if(inputValue => 0 ) {
//         console.log("Siz 21chi asrda tug'ilgansiz")
//     } 

// })