const nameinput = document.getElementById("enterName");
const amountinput = document.getElementById("enterAmount");
const addBtn = document.getElementById("addBtn");
const item = document.querySelector(".item");
const totalDiv = document.querySelector(".total")
const number = document.querySelector(".number")
const entry = document.querySelector(".entry")
const high = document.querySelector(".high")
const latest = document.querySelector(".latest")

let totalitem = 1;
let totalAmount = 20000;
let highest = 20000;


addBtn.addEventListener("click",()=>{
    let expName = nameinput.value;
    let expAmount = amountinput.value;

    if(expName == "" || expAmount == ""){
        return
    }

    totalitem++;
    number.textContent = `${totalitem}`
    entry.textContent = `${totalitem}`

    totalAmount += Number(expAmount);
    totalDiv.textContent = `₹${totalAmount}`

    if(highest < Number(expAmount)){
        highest = Number(expAmount);
        high.textContent = `${highest}`
    }

    latest.textContent = expAmount;

    let html = `<div class="item flex">
                <div class="name">${expName}</div>
                <div class="amount">
                  ₹${expAmount}
                </div>
              </div>`

    item.insertAdjacentHTML("afterend",html);
    
})

console.log(amountinput.value)