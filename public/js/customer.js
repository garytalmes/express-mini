const form = document.querySelector("form");
const customer = document.querySelector("[name='customerName']");
const email = document.querySelector("[name='customerEmail']");
const messageArea = document.querySelector(".message-container");

form.addEventListener("submit", function(event){
  event.preventDefault() 

  const data = {
    name: customer.value,
    email: email.value
  }

  fetch("/api/customer", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then( resp => resp.json())
  .then( data => {
    if( data.status === "success" ){
      const msg = document.createElement("span");
      msg.textContent = "Your action succeeded!";
      messageArea.classList.remove("error");
      messageArea.classList.add("success");
      messageArea.appendChild(msg)
    }
  })
})