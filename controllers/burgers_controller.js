var express = require("express");
var router = express.Router();
//importing burger.js to use the database functions
var burger = require("../models/burger");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {


    var hbsObject = {
      title: "My Burger Page is AWESOME!!!",
      //used the filter method instead of a handlebar
      burger_data: data.filter(b => !b.devoured),
    };

    console.log(hbsObject);
    res.render("burgers", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function (
    result
  ) {
    if ((result, changedRows === 0)) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.deleteOne(condition, function(req,res){
//   var condition = "id = " + req.params.id;
//   console.log("condition", condition);

//   burger.deleteOne(condition, function(result){
//     if(result, changedRows === 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
//});




const fs = require('fs');
const path = require('path');
const MAIN = path.join(__dirname, '../views/layouts/main.handlebars')
const NEW_PAGE = path.join(__dirname, '../views/test.handlebars')

router.get("/test", (req, res)=> {

  var hbsObject = {
    title: "SOME NEW TITLE",
    body: "SOME BODY"
  }

  fs.readFile(MAIN, 'utf8', (err, main)=> {
    if(err) throw err;

    fs.readFile(NEW_PAGE, 'utf8', (err, page)=> {
      if(err) throw err;
  
      console.log(main, page)

      main = main.replace('{{{ body }}}', page);

      Object.keys(hbsObject).forEach(key => {
        var regex = new RegExp('{{' + key + '}}', 'g')
        main = main.replace(regex, hbsObject[key])
      })
  
      res.send(main)
    })
  })


})

// Export routes for server.js to use.
module.exports = router;
