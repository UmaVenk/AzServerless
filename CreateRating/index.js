var https = require("https");
var http = require("http");

// import
const uuid = require('uuid')
//Comment to check workflow

//const got = require('got');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const name = (req.query.name || (req.body && req.body.name));

  userId = req.body.userId
  context.log("111", userId)
  validateUserURL = "https://serverlessohapi.azurewebsites.net/api/GetUser?userId=" + userId
  userListURL = "https://serverlessohapi.azurewebsites.net/api/GetUsers"

  https.get(validateUserURL, function (res) {
    console.log("111 response: " + res.statusCode);

    var str = "";

    res.on('data', function (chunk) {
      str += chunk;
    });

    res.on('end', function () {
      console.log(str);


      if (str.includes(userId))
        validUser = true
      else
        validUser = false

      console.log('validuser --', validUser)
    });



  }).on('error', function (e) {
    console.log("error: " + e.message);
  });
  /*
  got.get(userListURL, {responseType: 'json'})
    .then(res => {
      //const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
      console.log('Status Code:', res.statusCode);
      //console.log('Date in Response header:', headerDate);
  
      const users = res.body;
      for(user of users) {
        console.log(`Got user with id: ${user.userId}, name: ${user.userName}`);
      }
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });
  */



  productId = req.body.productId
  context.log("222", productId)
  validateProductURL = "https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=" + productId




  https.get(validateProductURL, function (res) {
    console.log("222 response: " + res.statusCode);

    var str = "";

    res.on('data', function (chunk) {
      str += chunk;
    });

    res.on('end', function () {
      console.log(str);


      if (str.includes(productId))
        validProduct = true
      else
        validProduct = false

      console.log('validProduct --', validProduct)
    });



  }).on('error', function (e) {
    console.log("error: " + e.message);
  });



  var responseData = {
    id: uuid.v4(),
    userId: req.body.userId,
    productId: req.body.productId,
    timestamp: new Date().toTimeString(),
    rating: req.body.rating,
    userNotes: req.body.userNotes
  };
  console.log('3333')


  /*
      const responseMessage = name
          ? "Hello, " + name + ". This HTTP triggered function executed successfully."
          : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
  */
  const responseMessage = JSON.stringify(responseData)
  console.log('444', responseMessage)
  context.bindings.ratingsDocument = responseMessage

  console.log('555', responseMessage)
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage
  };
}