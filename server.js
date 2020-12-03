const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

const contactData = require("./src/api/data");
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function findContacts(str) {
  const expr = RegExp(".*" + escapeRegExp(str) + ".*", "i");

  return contactData.filter(function (item) {
    return expr.test(item.name);
  });
}

app.get("/contacts", (req, res) => {
  const { term } = req.query;
  if (!term || typeof term !== "string" || term.length < 1) {
    res.sendStatus(400);
    res.json({
      error: "term query param required and of minumum of 3 chars",
    });
    return;
  }

  const decodedTerm = decodeURIComponent(term);
  res.json(findContacts(decodedTerm));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
