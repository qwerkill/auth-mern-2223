const express = require("express");
const router = express.Router();
const ShopController = require("../controllers/shop.controller");
const TokenMiddleware = require("../middlewares/token.middleware");

router.post('/shops',TokenMiddleware, ShopController.create);
router.get('/shops',TokenMiddleware, ShopController.getAll);
router.get('/shops/:id',TokenMiddleware, ShopController.getOne);
router.put('/shops/:id',TokenMiddleware, ShopController.update);
router.delete('/shops/:id',TokenMiddleware, ShopController.delate);

module.exports = router;