let categorys=[
    {
        cid:1,
        name:'mobile'
    },
    {
        cid:2,
        name:'laptop'
    }
]

let products=[
    {cid:1,pid:1,name:'iphone'},
    {cid:1,pid:2,name:'samsung'},
    {cid:2,pid:3,name:'hp'},
    {cid:2,pid:4,name:'dell'}  
]


document.querySelector("#search").addEventListener("keyup",function(){
    let name = this.value;
    let findId = '';
    for(let x=0;x<categorys.length;x++){
        if(categorys[x].name == name){
            findId = categorys[x].cid;
            break;
        }
    }
    let outPut="";

    for(let x=0;x<products.length;x++){
        if(products[x].cid == findId){
            outPut +=`<div>
            <h1>${products[x].name}</h1>
            <button onclick="gotoProduct(${products[x].pid})">Buy</button>  
            </div>`
        }
    }

    document.getElementById("result").innerHTML = outPut;
})


function gotoProduct(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href = "products.html";
}