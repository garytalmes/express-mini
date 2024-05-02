const express = require('express');
const path = require('path');
const routes = require("./routes")

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/", routes);


app.listen(PORT, () => {
  console.log(`Express listening at http://localhost:${PORT}`)
})