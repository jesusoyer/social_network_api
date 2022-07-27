const mongoose = require('mongoose');


const reactionSchema  = new mongoose.Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: null
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
    timestamps: true,
    toJSON: {
        getters: true
    }, 

})






const Reaction = mongoose.model('reaction', reactionSchema)

module.exports = Reaction;