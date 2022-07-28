const router = require('express').Router();

const {
    getUsers,
    deleteUser,
    getSingleUser,
    createUser,
    addfriend,
    removeFriend,
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUser);
  
  // /api/users/:userId
  router.route('/:userId').get(getSingleUser);
  router.route('/:userId').delete(deleteUser),
  // /api/users/:userId/friends/:friendsId
  router.route('/:userId/friends/:friendsId').post(addfriend)
  router.route('/:userId/friends/:friendsId').delete(removeFriend);
module.exports = router;