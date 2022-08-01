let productsList=[["Apple", 2.4],["Banana", 1.8], ["Cherry", 3],["Peach",1.2],["Watermelon", 0.7],["Melon", 1],["Plum", 3,2]]

let products=document.querySelector(".products")

let item=document.createElement("div")
item.classList.add("x")

function cards() {
    for(i=0; i<productsList.length; i++) {
        let item=document.createElement("div")
        item.classList.add("x")
        products.appendChild(item)
        let paragraph=document.createElement("p")
        paragraph.classList.add("paragraph")
        item.appendChild(paragraph)
        paragraph.innerHTML="Product Name:" + productsList[i][0]
        let paragraph1=document.createElement("p")
        item.appendChild(paragraph1)
        paragraph1.classList.add("paragraph1")
        paragraph1.innerHTML="Product Price:" + productsList[i][1] +"$"
    }
}

cards()

let lowHigh=document.querySelector(".lowHigh")
let highLow=document.querySelector(".highLow")
let az=document.querySelector(".az")
let za=document.querySelector(".za")

lowHigh.addEventListener("click", function(){
    products.innerHTML="";
    productsList.sort((a,b) => a[1]-b[1])
    cards()
})

highLow.addEventListener("click", function(){
    products.innerHTML="";
    productsList.sort((a,b) => b[1]-a[1])
    cards()
})

az.addEventListener("click", function(){
    products.innerHTML="";
    productsList.sort()
    cards()
})

za.addEventListener("click", function(){
    products.innerHTML="";
    productsList.reverse(productsList.sort())
    cards()
})

let filter=document.querySelector(".filter")
let min=document.querySelector(".min")
let max=document.querySelector(".max")


//let productsList=[["Apple", 2.4],["Banana", 1.8], ["Cherry", 3],["Peach",1.2],["Watermelon", 0.7],["Melon", 1],["Plum", 3,2]]
let filteredItems=[];

filter.addEventListener("click", function(){
    products.innerHTML="";
    filteredItems=[];
    for (i=0;i<productsList.length; i++) {
    if (min.value<productsList[i][1] && max.value>productsList[i][1]) {
        filteredItems.push(productsList[i])
    }
}
console.log(filteredItems);
cards1()
})
function cards1() {
    for(i=0;i<filteredItems.length;i++) {
        let item=document.createElement("div")
        item.classList.add("x")
        products.appendChild(item)
        let paragraph=document.createElement("p")
        paragraph.classList.add("paragraph")
        item.appendChild(paragraph)
        paragraph.innerHTML="Product Name:" + filteredItems[i][0]
        let paragraph1=document.createElement("p")
        item.appendChild(paragraph1)
        paragraph1.classList.add("paragraph1")
        paragraph1.innerHTML="Product Price:" + filteredItems[i][1] +"$"
    }
}