// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

 const db = require('./models');
 
 const today = new Date();

 const newSelfCare = [{
    task: "eat dinner",
    description: "eat dinner at home",
    byWhen: "10PM today",
    dateCompleted: today,
    cost: 0
 }, 
 {
    task: "sleep",
    description: "go to bed. despite your homework not being finished (you actually won't function better tomorrow without sleep, despite what you think)",
    byWhen: "11M today",
    dateCompleted: today
 }, 
 ]

 db.selfCare.create(newSelfCare, function (err, selfCare){
    if (err){
           return console.log("Error:", err);
    }
    console.log(`do this: ${selfCare} at ${selfCare.id}`)
    process.exit();
 })

 
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
