const {Schema, Types} = require('mongoose');

const reactionSchema  = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
        get: (date) => timeSince(date),   
    },
    
    toJSON: {
        
    }, 
    id: false,

})










// // Reaction.find({}).exec((err, Collection) => {
// //     if (Collection.length === 0) {
// //       Reaction.insertMany(
// //         [
// //           { username: 'elfrijo',
// //             email: "beans@yahoo.com"
// //         },{
// //             username: "eltorta",
// //             email: "bread@gmail.com"
// //         }
         
// //         ],
// //         (insertErr) => {
// //           if (insertErr) {
// //             handleError(insertErr);
// //           } else {
// //             console.log("user data seeded")
// //           }
// //         }
// //       );
// //     }
// //   });




module.exports = reactionSchema;