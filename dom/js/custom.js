// document.write("Hello")

// document.getElementById("demo").innerHTML = "Hello";

// let data = document.getElementsByClassName("demo");
// console.log(data)

// document.getElementById("demo").style.background='green';


// setTimeout(() => {
// document.getElementById("demo").style.background='green';


// },2000);

// let data =document.getElementsByTagName("p");
// console.log(data)


// document.getElementById("demo").innerHTML="<b>Hello</b>"


// document.getElementById("demo").innerText="<b>Hello</b>"


// let data =document.querySelector("#demo")
// console.log(data)


function addRecord(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    document.querySelector('button').innerHTML ="Add New Record"
}


function getValue(value){
    console.log(value)
}