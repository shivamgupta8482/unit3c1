function shiv(){
    window.location.href="index.html";
}
function append(){
    let data = JSON.parse(localStorage.getItem("products"))||[];
    let container = document.querySelector("#all_products");
    container.innerHTML="";
    data.forEach(function(el,index){
let div = document.createElement("div");
let img = document.createElement("img");
img.src = el.image;
let p = document.createElement("p");
p.innerText=el.type;
let p1 = document.createElement("p");
p1.innerText=el.desc;
let p2 = document.createElement("p");
p2.innerText=el.price;
let btn = document.createElement("button");
btn.innerText="Remove Product";
btn.setAttribute("id","remove_product")
btn.addEventListener("click",function(){
    remove(index);
});
div.append(img,p,p1,p2,btn);
container.append(div);



    });
}
append();

function remove(index){
    let data = JSON.parse(localStorage.getItem("products"))||[];
  data.splice(index,1);
  localStorage.setItem("products",JSON.stringify(data));
 // window.location.reload();
  append();
  
}