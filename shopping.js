let items = [
    {
      id: 1,
      name: "The Golden Ball",
      quantity:1,
      price: 1200,
      image: "images/ball.png",
      description: "Deathly Hallows Gold Snitch Ball",
    },
    {
      id: 2,
      name: "Houses Bookmarks",
      quantity:4,
      price: 800,
      image: "images/houses.png",
      description: "Gryffindor, Slytherin, Ravenclaw, Hufflepuff",
    },

    {
      id: 3,
      name: "Night lamp",
      quantity:1,
      price: 1500,
      image: "images/lamp.png",
      description: "deathly hallows night lamp",
    },
     

      {
        id: 4,
        name: "Harry Bookmark",
        quantity:1,
        price: 300,
        image: "images/harry.png",
        description: "Harry potter bookmark for readers",
      },

      {
        id: 5,
        name: "Hedwig keychain",
        quantity:1,
        price: 500,
        image: "images/hedwig.jpg",
        description: "Keychain of Harry's owl",
      },

      {
        id: 6,
        name: "Horcruxes cushion",
        quantity:1,
        price: 1000,
        image: "images/horcruxes.jpg",
        description: "Cushion with impression of all the horcruxes",
      },

      {
        id: 7,
        name: "Flying Key",
        quantity:1,
        price: 700,
        image: "images/key.jpg",
        description: "Winged keys of philosopher's stone",
      },
      {
        id: 8,
        name: "Harry Potter Books",
        quantity:8,
        price: 4000,
        image: "images/books.png",
        description: "All Series of Harry potter",
      },

      {
        id: 9,
        name: "Plattform 9 3/4 Diary",
        quantity:1,
        price: 800,
        image: "images/diary.jpg",
        description : "plattform for hogwarts express",
      },

      {
        id: 10,
        name: "Hermoini's locket",
        quantity:1,
        price: 1700,
        image: "images/time_travel.jpg",
        description: "The time travel pendant",
      },

      {
        id: 11,
        name: "Music box",
        quantity:1,
        price: 2000,
        image: "images/music.png",
        description: "Plays Harry potter tunes",
      },
      {
        id: 12,
        name: "Coffe Mug",
        quantity: 1,
        price: 1000,
        image: "images/mug.png",
        description: "Cofee mug with Harry potter's caricature",
      }

]
let cart=[];

function display(item1,who="wrapper"){
    let products= "";
    item1.forEach(function(ele,index){
        if(who=="wrapper"){
        products +=`
        <div class="product">
        <div class="product-img">
        <img src="${ele.image}" width="100%" height="100%">
        </div>
        <h3>${ele.name.toUpperCase()}</h3>
        <p><i>Price : INR ${ele.price} </i></p>
        <p>Quantity : ${ele.quantity}</p>
        <p>${ele.description}</p>
        <p>
          <button onclick="addToCart(${index})" target="cart1">Add to Cart</button>
        </p>
         </div>`;
        }
        else if(who=="cart-wrapper")
        {
            products +=`
            <div class="product">
            <div class="product-img">
            <img src="${ele.image}" width="100%" height="100%">
            </div>
            <h3>${ele.name.toUpperCase()}</h3>
            <p><i>Price : INR ${ele.price} </i></p>
            <p>Quantity : ${ele.quantity}</p>
            <p>${ele.description}</p>
            <p>
              <button onclick="remove(${index})">Remove From Cart</button>
            </p>
             </div>`;
            }
    });
    // console.log("products")
    document.getElementById(who).innerHTML=products;
    
}
display(items);
 //search
function search(){
    let searched= document.getElementById("search").value;
    let searchedValue=items.filter(function(ele)
    {
        let stringitem= ele.name+ " "+ ele.description;
        return stringitem.toUpperCase().indexOf(searched.toUpperCase())!=-1;
    });
    display(searchedValue);
}
//add to cart
let count=0;
function addToCart(idIndex)
{  if(cart.includes(items[idIndex])!=Boolean ('true')){
     cart.push(items[idIndex]);
    count++;}
    else
    alert("You Already Have this Product in your Cart");
 display(cart,"cart-wrapper");
 document.getElementById("totalCount").innerHTML=count;
}

//remove
function remove(idIndex){
    cart.splice(idIndex,1);
    count--;
    display(cart, "cart-wrapper");
    document.getElementById("totalCount").innerHTML=count;
}
//range
let range1=[];
function range(){
    let minimum=document.getElementById("min").value;
    let maximum=document.getElementById("max").value;
    items.forEach(function(ele,index){
        if(maximum>=ele.price && ele.price>=minimum){
           range1.push(items[index]);
        }
    
    });
    display(range1);
    document.getElementById("min").value="";
document.getElementById("max").value="";
}