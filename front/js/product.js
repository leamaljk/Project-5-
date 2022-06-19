// load a single product from http://localhost:3000/api/products/id api

// retrieve the product id from the url (https://easyautotagging.com/javascript-get-url-parameter/)
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')
//we're fetching products id on a product page using backtick literals
fetch(`http://localhost:3000/api/products/${id} `)
    .then(response => {
        response.json().then(product => {
            // console.log(product.price);
   
            price = product.price

        //getting imageUrl and alt through backtick template
        //modifying div and class content
        let productDiv = document.getElementsByClassName('item__img')[0];
        productDiv.innerHTML = 
        `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

        //get product title by name 
        let productTitle = document.getElementById("title");
        productTitle.innerHTML = product.name;

        //get price by price id tag 
        let productPrice = document.getElementById("price");
        productPrice.innerHTML = product.price;

        //get product description by description id 
        let productDescription = document.getElementById("description");
        productDescription.innerHTML = product.description;

        let colorsDropdown = document.getElementById("colors");
        //making a loop for each element in array of colors
        product.colors.forEach(element =>{
            colorsDropdown.innerHTML += 
            `<option value="${element}">
            ${element}</option>`
            });

        })

        });


//add event listener on button Add To Cart
console.log('helo');
const btn = document.getElementById('addToCart');

btn.addEventListener('click', function(event){
    productsInTheCart();
});

function productsInTheCart () {
    let productNumbers = localStorage.getItem('productsInTheCart');
    //converting a string into a number
    
    productNumbers = parseInt(productNumbers);
    
    if (productNumbers){
        localStorage.setItem('productsInTheCart', productNumbers +1);
    } else {
        localStorage.setItem('productsInTheCart', 1);

    }

};