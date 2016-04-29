var TemplateItem = require('../models/templateItemModel');

exports.getResources = function (req, res) {
    console.log('Getting Resources List');
    TemplateItem.find(req.query, function (err, dbItems) {
        if (err)
            res.status(500).send(err);
        else {
            var newProblems = [];
            res.json({items : dbItems});
        }
    });
};

exports.createResource = function (req, res) {
    console.log('Create New Resource');
    var ti = new TemplateItem(req.body); // TODO:  What if Post Contains Unnecessary Params that aren't in DB?

    ti.save(function (err) {
        if (err)
            res.status(500).send(err);
        else
            res.status(201).send(ti);
    });
};

exports.editResource = function (req, res) {
    console.log('Edit Resource '+req.params.id);
    TemplateItem.findById(req.params.id, function (err, tiObj) {
        if (err)
            res.status(500).send(err);
        else {
            if(req.body._id)
                delete  req.body._id;

            for(var p in req.body){
                tiObj[p] = req.body[p];
            }

            // Save Updated Statement
            tiObj.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(tiObj);
            });
        }
    });
};

exports.deleteResource = function (req, res) {

    console.log('Delete Resource '+req.params.id);
    TemplateItem.findById(req.params.id, function (err, tiObj) {
        if (err)
            res.status(500).send(err);
        else {
            tiObj.deleted = true;
            // Save Updated Statement
            tiObj.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(tiObj);
            });
        }
    });
};