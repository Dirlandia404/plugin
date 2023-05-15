console.log("Hello world");
window.TrelloPowerUp.initialize({
  "attachment-sections": function (t, options) {
    return t.card("coordenadas").then(function (card) {
      console.log("card");
      if (card.coordenadas) {
        //const (latitude, longitude) = card.coordenadas
        fetch("https://api.meteomatics.com/")
          .then(function (response) {
            return response.json();
          })
          .then(function (whead) {});
        console.log("teste push");
      }
      return [];
    });
  },
});

window.TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        text: "Atribuir Desenvolvedores",
        callback: function (t) {
          return t.popup({
            title: "Selecione os Desenvolvedores",
            url: "https://seu-site.com/selecione-desenvolvedores/",
            height: 500,
          });
        },
      },
    ];
  },
  "card-back-section": function (t, options) {
    return {
      title: "Desenvolvedores",
      icon: "https://seu-site.com/icon.png",
      content: {
        type: "iframe",
        url: t.signUrl("https://seu-site.com/lista-desenvolvedores/"),
        height: 230,
      },
    };
  },
});
