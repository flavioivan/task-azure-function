// var Result = require('result'); 

module.exports = async function (context, documents) {
    context.log('arrived here!!')
    if (!!documents && documents.length > 0) {
        context.log('Document Id: ', documents[0].id);
        
        // Result.create({
        //     text: documents.length
        // });
    }
}
