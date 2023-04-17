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
