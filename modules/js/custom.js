// import {add,sub} from "./calculator.js"

// console.log(add(5,8))


// let data =['ram','sita','hari']


// let data={
//     name:'ram',
//     address:'ktm',
//     contact:{
//         email:'info@demo.com',
//         phone:987987
//     }
// }

// // console.log(data.name)

// console.log(data.contact.email)


// let data ={}

// data.name ='hari'

// let data=[
//     {name:'ram',nep:34,eng:45,math:56,bio:67,sci:78},
//     {name:'sita',nep:67,eng:85,math:57,bio:47,sci:70},
//     {name:'hari',nep:73,eng:45,math:56,bio:67,sci:76},
// ]

// name,nep,eng,math,bio,sci,total,per,grade
// ram,34,45,56,67,78,345,67.8,A

// let data=['ram','sita','gita']

// for(let x in data){
//     console.log(x)
// }


// let data = {
//     name: 'ram',
//     age: 30,
//     phone: 9823455,
//     address:{
//         city:'ktm',
//         state:'lalitpur'
//     }
// }

// const {name,age,phone} = data
// console.log(name,age,phone)

// const {name,age,phone,address:{city,state}} = data

// document.write('Hello World')


// document.getElementById("demo").innerHTML="Hello World"

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// let data = document.getElementById("demo");
// console.log(data.textContent)

// let data =document.getElementsByClassName("demo");
// console.log(data[0].textContent)

// let name = document.getElementById("name").value

// console.log(name)

document.querySelector("#name").addEventListener("keyup",function(){
    console.log(this.value)
})