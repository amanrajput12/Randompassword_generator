

const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const result = document.getElementById("result")

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
 result.innerHTML =""
})

generateEl.addEventListener('click', ()=> {
    if(lengthEl.value<4|| lengthEl.value>20){
        result.innerHTML="Enter value with in the range"
    }
    else{
     generatePassword(password="")
    }
     
     
})

const generatePassword =(password)=> {

if(uppercaseEl.checked){
    password= randomFunc.upper()+password
}


if(lowercaseEl.checked){
    password= randomFunc.lower()+password
}
if(numbersEl.checked)
{
    password=randomFunc.number()+password
}
if(symbolsEl.checked)
    {
        password= randomFunc.symbol()+password
    }
    if(password.length <lengthEl.value){
        return generatePassword(password)
    }
    result.innerHTML =  truncateString(password,lengthEl.value)
    // result.innerHTML =  password
console.log(truncateString(password,lengthEl.value));
}
function truncateString(password, num) {
    if (password.length > num) {
      return password.slice(0, num) + "....";
    } else {
      return password;
    }
  }

function getRandomLower() {
    const lowerset ="abcdefghijklmnopqrstuvxyz"

    console.log( lowerset[Math.floor(Math.random()*lowerset.length)])
    return lowerset[Math.floor(Math.random()*lowerset.length)]
}

function getRandomUpper() {
    const upperset ="ABCDEFGHIJKLMNOPQRSTUVXYZ"
    console.log( upperset[Math.floor(Math.random()*upperset.length)])
    return upperset[Math.floor(Math.random()*upperset.length)]
}

function getRandomNumber() {
    const numberset ="1234567890"
    console.log( numberset[Math.floor(Math.random()*numberset.length)])
    return numberset[Math.floor(Math.random()*numberset.length)]
    }

function getRandomSymbol() {
    const symbolset ="~!@#%^&*()_+/"
    console.log( symbolset[Math.floor(Math.random()*symbolset.length)])
    return symbolset[Math.floor(Math.random()*symbolset.length)]
}