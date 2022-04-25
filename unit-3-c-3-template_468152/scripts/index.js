// Store the wallet amount to your local storage with key "amount"
// let total = JSON.parse(localStorage.getItem("amount"))||[];

let c=0;
for(let i=0; i<total.length; i++){
    c+= +total[i]
}
console.log(length)

function addFunc(){
    let amount = document.getElementById("amount").value;
    total.push(amount)
    localStorage.setItem("amount",JSON.stringify(amount));
}



// Store the wallet amount to your local storage with key "amount"
// document.querySelector('#form').addEventListener('submit', formFunct);

// totalAmount=JSON.parse(localStorage.getItem("amount")) || [];


// function addAmount(){
//     let totalAmount=0
//     let amount= document.getElementById('amount').value;
//     totalAmount+=amount

    
//     console.log(totalAmount)
//     localStorage.setItem('amount',JSON.stringify(totalAmount));
// }
