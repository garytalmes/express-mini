

/**
 * Some of the code in this solution is fairly advanced. Here are somewhat easier-to-read 
 * ways to solve certain problems.
 */

// 1. Updating products.json() when we need to reduce qty

function updateProducts(originalProductData, idOfTargetProduct){

  // Make a new empty array to hold our updated product data 
  const newProductData = []

  // Iterate over the current array of data 
  originalProductData.forEach( (product) => {
    // if the current product in this loop is not the one we are modifying, add it as-is to the new array
    if( product.id !== idOfTargetProduct ){
      newProductData.push(product)
    } else {
      // otherwise we can make a clone of the product object we are changing, and modify its quantity there 
      const updatedProduct = {...product, qty: qty-1 }
      // and now we push the updated product into the new array
      newProductData.push(updatedProduct)
    }
  })

  return newProductData;
}