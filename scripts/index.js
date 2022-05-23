//store the products array in localstorage as "products"
function Products(t,d,p,i){
    this.type =t;
    this.desc =d;
    this.price =p;
    this.image =i;

}

function storedata(e){
    e.preventDefault();
    let form = document.querySelector("#products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let s1 =new Products(type,desc,price,image);
    let data = JSON.parse(localStorage.getItem("products"))||[];
    data.push(s1);
    localStorage.setItem("products",JSON.stringify(data));


}
function shivam(){
    window.location.href="inventory.html";
}