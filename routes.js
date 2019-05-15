const express = require("express");

const routes = express.Router();
const notificationController = require("./src/Controllers/notificationController");

//Enviar Notificação
routes.get(
  "/nova_notificacao/:mensagem/:titulo",
  notificationController.sendNotification
);

module.exports = routes;
