const User = require('../database-mongo/index.js');
// const Event = require('../database-mongo/index.js/Event');
// const request = require('request');


// exports.dbLookup = (req, res) => {
//   User.find({userName: req.body.userName}).exec((err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.send(JSON.stringify(result));
//   });
// };

exports.saveEvents = (req, res) => {
  console.log("*********called function saveEvents!!!");
  // var events = {
  //   date: req.body.saveDate,
  //   events: JSON.stringify(req.body.saveSelections);
  // };
  // var userObj = {
  //   userName: req.body.userName,
  //   date: req.body.saveDate,
  //   events: [JSON.stringify(req.body.saveSelections)]
  // };

  // User.create(userObj, (err, events) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
  res.send('Got /selected request ****');
}