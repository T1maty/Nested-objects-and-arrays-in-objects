"use strict";

var country = {
  name: " Sweden",
  languages: ["French, italian"],
  capital: {
    name: "Bern",
    population: 126598
  },
  cities: [{
    name: "Geneva",
    population: 188634
  }, {
    name: "Basel",
    population: 164937
  }]
};
document.write("<h3> Official languages Sweden</h3>");

for (var i = 0; i < country.languages.length; i++) {
  document.write(country.languages[i] + "<br/>");
}

document.write("<h3> Cities Sweden</h3>");

for (var i = 0; i < country.cities.length; i++) {
  document.write(country.cities[i].name + "<br/>");
}
//# sourceMappingURL=main.dev.js.map
