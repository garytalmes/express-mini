const router = require("express").Router(); 
const fs = require("fs/promises")
const { readCustomers } = require("../../utils/readJsonData");

// router.get("/", (req, res) => {
//   res.send('customer GET route: ' + req.isAwesome)
// })

// router.get("/:id", (req, res) => {
//   res.send('customer GET route')
// })

/*
  When a new customer signs up, their info will be submitted 
  to this route. We need to read the existing customers.json 
  file, modify the data, and then save an updated version.
*/

router.post("/", async (req, res) => {
  const database = await readCustomers()
  database.push(req.body)

  try {
    const writeResult = await fs.writeFile("db/customers.json", JSON.stringify(database))
    res.status(200).json({ status: "success" })
  } catch(err){
    res.status(400).json({ status: "fail" })
  }
})

// router.put("/:id", (req, res) => {
//   res.send('customer PUT route')
// })

// router.delete("/:id", (req, res) => {
//   res.send('customer DELETE route')
// })


module.exports = router;