const productsList = document.querySelector("#products-listing");
const messageArea = document.querySelector(".message-container");

function displayProducts(data){
  if( !data?.payload || !data.payload.length ){ 
    const pTag = document.createElement("p"); 
    pTag.textContent = "There are no products available right now."
    productsList.append(pTag);
  } else {
    const container = document.createElement("div");
    data.payload.forEach( (product) => {

      /* 
        Our utilities JS file has some cool code to make generating our product info easy.
        Let's use that here. The product object we get from the server has the same properties 
        as those required by generateCard (id, name, etc), so we can just de-structure the 
        product object and send all the data to the generateCard function super-easily.
      */
     
      const productCard = generateCard({...product});
      productsList.appendChild(productCard)

    })
  }
}

async function getProducts(){
  let data
  try {
    const response = await fetch("/api/product");
    data = await response.json();
  } catch (err) {
    messageArea.append("<p>There was an error and we could not retrieve our list of products. It was probably Brittany's fault.");
  }
  
  displayProducts(data);
}


/*
  Because I wanted to generate the cards dynamically, creating the link which would initiate fetch call 
  posed a challenge. The card generator should work (ideally) in lots of use cases; but if I have to 
  finagle the code just for the special fetch call, then that function is useless.

  So instead, I realized that we can use event listeners and event delegation to handle the click 
  of the link instead. See code below.
*/

productsList.addEventListener("click", async function(event){

  if( event.target.matches("a") ){
    // we need to get the id of the product, it's been placed on the outer div of the bootstrap card.
    const id = event.target.parentNode.parentNode.getAttribute("id");

    // now we can make the fetch call to update the product qty
    try {
      const update = await fetch(`/api/product/${id}`, {
        method: "PUT",
        body: "",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then( resp => resp.json() )
      .then( data => {
        if( data.status === "success" ){
          const msg = document.createElement("span");
          msg.textContent = "Your action succeeded!";
          messageArea.classList.remove("error");
          messageArea.classList.add("success");
          messageArea.appendChild(msg);
        }
      })

    } catch(err){

    }
  }
})




getProducts();
