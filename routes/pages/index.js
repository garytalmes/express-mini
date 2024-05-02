const router = require("express").Router();
const path = require("path");


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/about.html'))
);

router.get('/contact', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/contact.html'))
);

router.get('/products', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/products.html'))
);



module.exports = router;