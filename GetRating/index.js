module.exports = async function (context, req, toDoItem) {
    context.log('JavaScript HTTP trigger function processed a request.');
    //Comment to check workflow
    //const name = (req.query.name || (req.body && req.body.name));

    //userId = req.body.ratingId
    //context.log("111" , ratingId)
    context.log('JavaScript queue trigger function processed work item');
    if (!toDoItem)
    {
        context.log("ToDo item not found");
    }
    else
    {
        context.log("Found ToDo item, Description=" + toDoItem);
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(toDoItem)
    };
   
}