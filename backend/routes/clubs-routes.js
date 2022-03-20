const express = require('express');
const { check } = require('express-validator');

const clubsControllers = require('../controllers/clubs-controllers');

const router = express.Router();

router.get('/:gid', clubsControllers.getClubById);
router.get('/user/:uid', clubsControllers.getClubByUserId);

router.post(
    '/',
    [
        check('title')
        .not()
        .isEmpty(),
        check('description').isLength({min: 5}),
        check('address').not().isEmpty()
    ],
    groupsControllers.createGroup
);

router.patch('/gid', [
    check('title').not().isEmpty(),
    check('description').isLength({min: 5})
], groupsControllers.updateGroup);

router.delete('/:gid', groupsControllers.deletePlace);

module.exports = router;