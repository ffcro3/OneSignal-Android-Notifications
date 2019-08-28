module.exports = {
  async sendNotification(req, res) {
    const titulo = req.params.titulo;
    const mensagem = req.params.mensagem;

    var data = {
      app_id: "0bcdf611-6590-4c2d-8035-f6fe14985e81",
      contents: { en: mensagem },
      headings: { en: titulo },
      included_segments: ["Active Users"]
    };

    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic <<INSERT YOU ONESIGNAL AUTHORIZATION TOKEN HERE>>"
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };

    var https = require("https");
    var req = https.request(options, function(res) {
      res.on("data", function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on("error", function(e) {
      console.log("ERROR:");
      console.log(e);
    });

    res.send("Notificação Enviada");
    req.write(JSON.stringify(data));
    req.end();
  }
};
