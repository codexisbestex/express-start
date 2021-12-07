/**
 * BASE SETUP
 */
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

/**
 * ROUTES
 */
app.get("/sample", (req, res) => {
  res.status(200).send("This is a response on the /sample route");
  // res.sendStatus(404);
  // res.status(500).send("Sorry, something went wrong on our end");
});

// We'll create our routes here
const fruitsRouter = require("./routes/fruitsRouter");

// tell Express to apply the routes to our application
app.use("/fruits", fruitsRouter); // mount fruitsRouter onto /fruits

/**
 * START THE SERVER
 */
app.listen(port, () => {
  console.log(`Angie's War Crimes Server now working on ${port}`);
});
