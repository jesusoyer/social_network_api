
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {
        type:String, 
        require: true,
        unique: true,
        trim:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
],
},
{
    toJSON: {
        virtuals: true,
}
    
});

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
})
const User = mongoose.model('user', userSchema)

const handleError = (err) => console.error(err);



User.find({}).exec((err, Collection) => {
    if (Collection.length === 0) {
      User.insertMany(
        [
          { username: 'elfrijo',
            email: "beans@yahoo.com"
        },{
            username: "eltorta",
            email: "bread@gmail.com"
        }
         
        ],
        (insertErr) => {
          if (insertErr) {
            handleError(insertErr);
          } else {
            console.log("user data seeded")
          }
        }
      );
    }
  });




userSchema.plugin(uniqueValidator);

module.exports = User;