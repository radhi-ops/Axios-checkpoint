const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;


//first solution
// const requestOne = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=0ff917ff9da9e0366597fbf69aa8b8ee`)
// const requestTwo = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=0ff917ff9da9e0366597fbf69aa8b8ee")
// const requestThree = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=0ff917ff9da9e0366597fbf69aa8b8ee")

// axios
//   .all([requestOne, requestTwo, requestThree])
//   .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
//       console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
//     })
//   )
//   .catch(errors => {
//     console.error(errors);
//   });

/******************************************/

//second solution
const arg = process.argv[2];
axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=0ff917ff9da9e0366597fbf69aa8b8ee`
  )
  .then((request) => {
    console.log(request.data);
  })
  .catch((errors) => {
    console.error(errors);
  });



app.listen(port, (err) => {
  err
    ? console.log("server is not running")
    : console.log(`server is running on port ${port}`);
});
