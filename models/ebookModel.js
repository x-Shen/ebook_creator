/**
 * Created by xinshen on 7/28/16.
 */

var mongoose = require('mongoose');

var ebookSchema = mongoose.Schema({
    page: [String],
    createdAt: {type: Date, default: Date.now}

});


var ebook = mongoose.model("ebook", ebookSchema);
module.exports = ebook;

