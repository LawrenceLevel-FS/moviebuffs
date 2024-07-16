const { app, port } = require("./app/index");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
