const { app, port, router } = require("./app/index");

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
