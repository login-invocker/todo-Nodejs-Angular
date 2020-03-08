var express = require(`express`);
var bodyParser = require(`body-parser`);
var morgan = require(`morgan`);
var config = require(`./config`);
var mongoose = require(`mongoose`);
var todoController = require(`./api/Controller/todoController`);
var setupController= require(`./api/Controller/setupcontroller`);
var app = express();

var port = process.env.PORT || 3000;


app.use("/assets", express.static(__dirname + `/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//test url
app.use(morgan("dev"));

app.set("view engine", "ejs");
// db connect info
//console.log(config.getDbConnectionString())
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true });
//config dinh tuyen
app.get(`/`, (req, res) => {
    res.render("index");
});
todoController(app);
setupController(app);
app.listen(port, () => {
    console.log("app lissten on post :"+port);
});
module.exports=app;