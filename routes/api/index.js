const router = require("express").Router();

const customerRoutes = require("./customer");
const productRoutes = require("./product");

router.use("/customer", customerRoutes);
router.use("/product", productRoutes);

module.exports = router;