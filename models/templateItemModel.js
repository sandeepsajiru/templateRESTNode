var mongoose = require("mongoose");

var templateItemSchema = new mongoose.Schema({
    title: String,
    author : String,
    created_at: Date,
    updated_at: Date,
    deleted : Boolean
});

templateItemSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
        this.deleted = false;
    }

    next();
});

module.exports = mongoose.model('templateItem', templateItemSchema);