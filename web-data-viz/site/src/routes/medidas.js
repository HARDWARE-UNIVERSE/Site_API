var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;