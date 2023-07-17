const express = require("express");
const bodyParser = require("body-parser");
const bucketRouter = require('./routes/bucket.router');
const BucketModel = require('./model/bucket.model');
const BallModel = require('./model/ball.model');
const path = require("path");
const app = express();

app.use(bodyParser.json())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));


app.use("/", bucketRouter);

app.use("/", (req, res) => {
  BucketModel.find({})
    .then((buckets) => {
      // Render the HTML template with the fetched data
      res.render('index', { buckets });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});


module.exports = app;