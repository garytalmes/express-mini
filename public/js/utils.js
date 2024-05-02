
/* This utility creates a DOM element and attaches classes, an id, and 
appends text content all at the same time. */ 

function createDOMElement({tag, classes, id, content}){
  const newElem = document.createElement(tag);
  if( classes && classes.length ){
    newElem.classList.add([...classes]) // we destructure the array of classes so we can add them in here
  }

  if( id ){
    newElem.setAttribute("id", id)
  }

  if( content ){
    newElem.textContent = content
  }

  return newElem
}


/*
  Here's a nice little piece of utility code that will 
  generate a Bootstrap card for you.
*/

function generateCard({id, name, description}){
  const cardDiv = createDOMElement({ tag: "div", classes: ["card"], id: id  });
  const cardBody = createDOMElement({ tag: "div", classes: ["card-body"] });
  const h5Tag = createDOMElement({ tag: "h5", classes: ["card-title"], content: name })
  const pTag = createDOMElement({ tag: "p", classes: ["card-text"], content: description })
  const link = createDOMElement({ tag: "a", classes: ["card-link"], content: "Click here to order!" })
  
  cardBody.appendChild(h5Tag);
  cardBody.appendChild(pTag);
  cardBody.appendChild(link);

  cardDiv.appendChild(cardBody);
  console.log(cardDiv)

  return cardDiv
}