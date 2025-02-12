// try {
//     let name = 'ram';
//     console.log(name)
// } catch (error) {
//     console.log(error)
// }

// console.log('Hello World') // Output: ram Hello World

// console.log(10/2)


// let data = new Promise((resolve, reject) => {
//     let task =false;
//     if(task){
//         resolve('Task is completed')
//     }else{
//         reject('Task is not completed')
//     }


// });

// data.then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e)
// })


// console.log("hello javascript")



// function demo(){
//     setTimeout(()=>{
//         console.log("I am demo function")
//     },2000);
// }


// function test(){
//     console.log("I am test function")
// }

// demo();
// test();

// function add(x,y){
//     if(y==0){
//         throw new Error("Y should not be zero")
//     }
//     return x+y
// }

// try{
// console.log(add(10,0))
// }catch(e){
//     console.log(e.message)
// }finally{
//     console.log("I am finally block")
// }


// console.log("Hello javascript")



// function demo(){
//     setTimeout(()=>{
//         console.log("I am demo function")
//     },2000);
// }


// function test(){
//     demo();
//     console.log("I am test function")
// }

// test();


// let data = new Promise((resolve, reject) => {
//     let task =true;
//     setTimeout(() => {
//         if(task){
//             resolve('Task is completed')
//         }else{
//             reject('Task is not completed')
//         }
//     },3000)

// });

// async function test(){
//     let res =await data;
//     console.log(res)
//     console.log("I am test function")
// }

// test();


function checkAge(age){
    return new Promise((resolve,reject)=>{
      if(age>100){
        setTimeout(()=>{
          resolve('Age is greater than 100')
        },2000)
      }else{
        reject('Age is less than 100')
      }
    })
}

checkAge(17).then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})