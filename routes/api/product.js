const router = require("express").Router();
const fs = require("fs/promises")
const { readProducts } = require("../../utils/readJsonData");

router.get("/", async (req, res) => {
  const database = await readProducts() 
  res.status(200).json({ status: "success", payload: database })
})

// router.get("/:id", (req, res) => {
//   res.send('product GET route')
// })

// router.post("/", (req, res) => {
//   res.send('product POST route')
// })


// Here we are going to update the qty of a product
router.put("/:id", async (req, res) => {
  const database = await readProducts()

  // Now we will use array map to transform the current array
  // of products to a new array which is almost EXACTLY the same,
  // except that we reduce the qty of this product by 1.

  const updatedData = database.map( product => ({
    ...product, // keep almost all product data as-is; only change qty for the product that is specified in req.params.id
    qty: ( product => product.id === req.params.id ) ? product.qty -1 : product.qty
  }));

  // Now we write the updated json file

  try {
    const writeResult = fs.writeFile("db/products.json", JSON.stringify(updatedData) )
    res.status(200).json({ status: "success" })
  } catch(err){
    res.status(400).json({ status: "fail" })
  }
})



// router.delete("/:id", (req, res) => {
//   res.send('product DELETE route')
// })


module.exports = router;