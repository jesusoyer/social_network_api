
const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    title: {type:String, require: true},
    
})
const handleError = (err) => console.error(err);

const AppCollection = mongoose.model('appCollection', appSchema)

AppCollection.find({}).exec((err, Collection) => {
    if (Collection.length === 0) {
      AppCollection.insertMany(
        [
          { title: 'Kids' },
          { title: 'Kids' },
          { title: 'Kids' },
          { title: 'Romance' },
          { title: 'Mystery' },
          { title: 'Contemporary' },
          { title: 'Biography' },
        ],
        (insertErr) => {
          if (insertErr) {
            handleError(insertErr);
          }
        }
      );
    }
  });



module.exports = AppCollection;