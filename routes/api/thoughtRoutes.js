const router = require('express').Router();



const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
  } = require('../../controllers/appController');
  
  // /api/thoughts
  router.route('/').get(getThought).post(createThought);
  
  // /api/reactions/:thoughtId
  router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
  
  // /api/apps/:thoughtId/reaction
  router.route('/:thoughtId/reaction').post(addReaction);
  
  // /api/apps/:thoughtId/tags/:reactionId
  router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);




module.exports = router;



