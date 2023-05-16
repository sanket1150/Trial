//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();
mongoose.connect("mongodb+srv://sanketk3220:Sanket-1150@cluster0.pq5hikb.mongodb.net/todoListItem");
app.set('view engine', 'ejs');

const itemsch = mongoose.Schema({
  name: String,
});

const routeItems = mongoose.Schema({
  name: String,
  item: [itemsch],
});

const todoListItem = mongoose.model('todoListItem', itemsch);
const routeItemsList = mongoose.model('routeItemsList', routeItems);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const items = readData(todoListItem)
    .then((data) => {
      console.log(data); // Output: [ {...}, {...}, ... ]
      res.render("list", { listTitle: 'Today', newListItems: data });
    })
    .catch((error) => {
      console.error(error);
    });



});

app.post("/add/:addparam", function (req, res) {
  const addprarameter = req.params.addparam;
  var items = new todoListItem({
    name: req.body.newItem,
  });
  if (addprarameter =='Today') {

      items.save();
    
    res.redirect('/');
  }else{
    items = new routeItemsList({
      name: addprarameter,
      item : [items]
    });
    items.save();
    res.redirect('/'+addprarameter);
  }
});
app.post('/delete/:delparam', function (req, res) {
  const todoId = req.body.checkBox;
  const delprarameter = req.params.delparam;
  if (delprarameter =='Today') {
    
    deleteItem(todoListItem, todoId);

    res.redirect('/');
  }else{
    deleteItem(routeItemsList, todoId);
    res.redirect('/'+delprarameter);
  }
});




app.get("/:subRoute", function (req, res) {
  const route = req.params.subRoute;
  
  (async () => {
    try {
      const result = await routeItemsList.find({name:route}, { item: 1 }).populate('item');
      console.log(result.forEach((item) => {
        console.log(item.item);
      })); // log the entire object to console
      res.render("list", { listTitle: route, newListItems: result });
    } catch (err) {
      console.error(err);
    }
  })();
});


app.get("/about", function (req, res) {
  res.render("about");
});





async function readData(todoListItem) {
  try {
    const data = await todoListItem.find({});
    //console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
}

async function deleteItem(list, itemId) {
  itemId = itemId.str
  try {
    const data = await list.deleteOne({ id: itemId });
    return data
  } catch (error) {
    console.log(error);
  }
}

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
// const todoitems = new todoListItem({
//   name: 'test',
// });
// const routeitem = new routeItemsList({
//   name: route,
//   item: [todoitems]
// })
// routeitem.save();