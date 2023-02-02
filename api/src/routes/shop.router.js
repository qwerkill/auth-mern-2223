const express = require("express");
const router = express.Router();
const ShopController = require("../controllers/shop.controller");
const TokenMiddleware = require("../middlewares/token.middleware");

router.get('/shops', ShopController.getAll);
router.get('/shops/:id', ShopController.getOne);
router.post('/shops',TokenMiddleware, ShopController.create);
router.put('/shops/:id',TokenMiddleware, ShopController.update);
router.delete('/shops/:id',TokenMiddleware, ShopController.delate);

module.exports = router;