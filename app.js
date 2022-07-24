// jshint esversion:6
// const http = require('http');

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const date=require(__dirname+"/date.js");

console.log(date);
// Note: we can push items into the array but can't make the new array with same variable name.
const items=["Ride a Cycle","Eat Food","Sleep","Play any Sports you would like for around 20 minutes"];
const workItems=[];
app.set('view engine', 'ejs');

app.get("/", function(req, res)
{
const day=date.getDate();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));




  // const currentDay = today.getDay()
  // const day = "";
  //
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error:current day is equal to: "+currentDay);
  // }

  // if(currentDay===6|| currentDay===0)
  // {
  //   day=currentDay;
  //  }else
  //  {
  //    day=currentDay;
  //  }

  res.render("list", {
    listTitle: day,
    newListItems:items
  });

  app.post("/",function(req,res){
   const item=  req.body.newItem;
   if(req.body.list==="Work"){
     workItems.push(item);
     res.redirect("/work");
   }else{
     items.push(item);
     res.redirect("/");
   }


  // console.log(item);
  // response.render("list",{newListItem:item});
  })
});
app.get("/work",function(req,res){
  res.render("list",{
    listTitle:"Work List",
    newListItems:workItems});
})
app.post("/work",function(req,res){
  const item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
