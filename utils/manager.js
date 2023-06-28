const Enmap = require("enmap"),
  /** @type {Enmap.default} */
  db = new Enmap({ name: "dailies" });

db.ensure("items", []);

function get() {}
