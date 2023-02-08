module.exports = async function (context, req, input) {
    context.log('JavaScript HTTP trigger function processed a request.');
    //Comment to check workflow
    //userId = req.body.userId;
    //console.log('111', userId)
    var documents = context.bindings.userRatings;
    for (var i = 0; i < documents.length; i++) {
      var document = documents[i];
      // operate on each document
      console.log(document)
    }    

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(documents)
    };
}