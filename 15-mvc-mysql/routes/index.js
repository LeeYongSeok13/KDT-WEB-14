const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// 기본 주소 : localhost:PORT/

// GET /
router.get("/", controller.main);

// GET /visitors
router.get("/visitors", controller.visitors);

// POST /visitor
router.post("/visitor", controller.post_visitor);

// GET /visitor - 하나 조회
router.get("/visitor", controller.get_visitor); // req.query
router.get("/visitor/:id", controller.get_visitor); // req.params;

// PATCH /visitor
router.patch("/visitor", controller.patch_visitor);

// DELETE /visitor
router.delete("/visitor", controller.delete_visitor);
module.exports = router;
