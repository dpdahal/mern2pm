async function getData(){
    let data = await fetch("http://localhost:3000/studentsData")
    data = data.json();
    data.then((res)=>{
        console.log(res);
    })
}
getData();

function insertData(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let insertData={name,age,city};
    fetch("http://localhost:3000/studentsData",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(insertData)
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
}