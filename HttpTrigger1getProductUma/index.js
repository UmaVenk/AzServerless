module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    

    const name = (req.query.productId || (req.body && req.body.productId));
    
    context.log('111', name);
    
    const responseMessage = name
        ? "The product name for your product ID is " + name + " is Starfruit Explosion"
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}