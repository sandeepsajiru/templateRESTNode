var express = require('express');
var router = express.Router();
var templateLib = require('../lib/templateLib');

router.route('/')
    .get(templateLib.getResources)
    .post(templateLib.createResource);

router.route('/:id')
    .put(templateLib.editResource)
    .delete(templateLib.deleteResource);

module.exports = router;
