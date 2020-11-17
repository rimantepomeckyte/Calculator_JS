const veiksmas = document.querySelector("#veiksmas");
const result = document.querySelector("#result");
const num1 = document.querySelector("#num1");
const num2= document.querySelector("#num2");
const submit = document.querySelector("#submit");

submit.addEventListener("click", skaiciuok);

class Calculator {
    constructor(name) {
        this.name = name;
    }
    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2){
    return num1-num2;
    }
    multiply(num1, num2){
        return num1*num2;
    }
    divide(num1, num2) {
        return num1 / num2;
    }
}
let skaiciuotuvas = new Calculator("Skaiciuotuvas");
console.log(skaiciuotuvas)

function skaiciuok(){
    if (veiksmas.value ==="Sudeti"){
        let atsakymas = skaiciuotuvas.add(parseInt(num1.value),parseInt(num2.value));
        result.innerHTML=atsakymas;
        console.log("sudeti");
    }
    else if (veiksmas.value ==="Atimti") {
        let atsakymas = skaiciuotuvas.subtract(parseInt(num1.value), parseInt(num2.value));
        result.innerHTML = atsakymas;
        console.log("atimti");
    }
    else if (veiksmas.value ==="Dalinti"){
            let atsakymas = skaiciuotuvas.divide(parseInt(num1.value),parseInt(num2.value));
            result.innerHTML=atsakymas;
            console.log("dalinti");
    }
        else if (veiksmas.value ==="Dauginti"){
            let atsakymas = skaiciuotuvas.multiply(parseInt(num1.value),parseInt(num2.value));
            result.innerHTML=atsakymas;
            console.log("dauginti");
        }
}






//Taip rasydavo kol nebuvo ES6
/*let person ={
    name:["Bob", "Smith"],
    age: 32,
    gender:"male",
    interests:["music", "skiing"],
    bio:  function (){
        alert(this.name[0]+" "+this.name[1]+" is "+
        this.age +" years old. Ke likes "+ this.interests[0]+" and "+
            this.interests[1]+".");
    },
    greeting:function (){
        alert("Hi I\'m"+this.name[0]+".");
    }
}
console.log(person.name)
console.log(person.name[0])
console.log(person.age)
console.log(person.interests[1])
person.bio()
person.greeting()*/