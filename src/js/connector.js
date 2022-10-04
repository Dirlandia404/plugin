console.log("Hello world");
window.TrelloPowerUp.initialize({
  "attachment-sections": function (t, options) {
    return t.card("all").then(function (card) {
      console.log("card");
      return [
        {
          text: card.idShort,
        },
      ];
    });
  },
});
