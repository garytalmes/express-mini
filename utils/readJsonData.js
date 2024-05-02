
const fs = require("fs/promises");
const path = require("path");

/**
 * Because we are not yet using a database, we need
 * to read our data from the JSON file every time it
 * is requested. We CANNOT read it just once and store 
 * the value as a variable, because we will probably be 
 * updating that file all the time.
 * 
 * This code performs the tedious task of reading and 
 * parsing that file. I'm also using the async version 
 * of readFile so that we don't have to deal with 
 * callbacks. More on this later.
 */

async function readCustomers(){
  const data = await fs.readFile("db/customers.json", "utf-8").catch( err => {
    res.status(400).json({ status: "fail", msg: err.message })
  })
  const parsedData = JSON.parse(data);
  return parsedData;
}

async function readProducts(){
  const data = await fs.readFile("db/products.json", "utf-8").catch( err => {
    res.status(400).json({ status: "fail", msg: err.message })
  })
  const parsedData = JSON.parse(data);
  return parsedData;
}

module.exports = {
  readProducts,
  readCustomers
};