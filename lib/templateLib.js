
exports.getResources = function (req, res) {
    console.log('Getting Resources List');
    var obj = [{title : 'sample title', author: 'sample author'}, {title : 'sample title', author: 'sample author'}];
    res.json(obj);
};

exports.createResource = function (req, res) {
    console.log('Create New Resource');
    var obj = { message: 'created successfully', id:'1'};
    res.json(obj);
};

exports.editResource = function (req, res) {
    console.log('Edit Resource '+req.params.id);
    var obj = { message: 'updated successfully', id: req.params.id};
    res.json(obj);

};

exports.deleteResource = function (req, res) {
    console.log('Delete Resource '+req.params.id);
    var obj = { message: 'deleted successfully', id: req.params.id};
    res.json(obj);
};