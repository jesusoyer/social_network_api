
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type:String, 
        require: true, 
        maxLength:128, 
        minLength:1 },
    createdAt:{
        type:Date,
        default: Date.now,
        get: (date) => timeSince(date),        
    },
    username:{
        type:String,
        require: true,
    },
    reactions:{
        react: [{reactionSchema}]
    },
    timestamps: true,
    toJSON: {
        virtuals: true,
        getters: true
    },
    
    
});

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
})

const Thoughts = mongoose.model('thoughts', thoughtSchema)








module.exports =  Thoughts;