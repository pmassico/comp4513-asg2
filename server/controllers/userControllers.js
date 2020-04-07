/*const fs = require('fs');

const getUserId = async (req, res, next) => {
  console.log(__dirname);
  //let rawdata = fs.readFileSync('user.json');
//let student = JSON.parse(rawdata);
//console.log(student);

  fs.readFile('user.json', function (err, data) {
    
    //const rawdata = data;
    //console.log(rawdata);
    //const user = JSON.parse(rawdata);
    //if (err) {
      //console.error(err)
      //return
    //}
    //console.log(data);
    
    //const user = { userID: data };

    //res.json(user);
  });
}

module.exports = {
  getUserId
};*/

const fs = require("fs");

const getUserId = (req, res, next) => {
  let raw = fs.readFileSync("user.json");
  let user = JSON.parse(raw);
  console.log(user);

  res.json(user);
};

module.exports = {
  getUserId
};
