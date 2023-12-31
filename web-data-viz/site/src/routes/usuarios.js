var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/limpar", function (req, res) {
//     usuarioController.limpar(req, res);
// })

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})


router.post("/limpar", function (req, res) {
    usuarioController.limpar(req, res);
})

router.post("/cadastrarQuiz", function (req, res) {
    usuarioController.cadastrarQuiz(req, res);
})
module.exports = router;