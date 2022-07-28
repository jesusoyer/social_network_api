
const {Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

console.log("this page hit")



const thoughtSchema = new Schema(
    {
    thoughtText:{
        type:String, 
        require: true, 
        maxLength:128, 
        minLength:1 
    },
    createdAt:{
        type:Date,
        default: Date.now,        
    },
    username:{
        type:String,
        require: true,
    },
    reactions:[reactionSchema],
  },
    {
    toJSON: {
        virtuals: true,
     
    },
    id: false,
    
    
});

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
})

const Thoughts = model('thought', thoughtSchema)










module.exports =  Thoughts;