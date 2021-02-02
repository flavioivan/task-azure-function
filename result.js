var mongoose = require('mongoose');

module.exports = mongoose.model('Result', {
    text: {
        type: String,
        default: ''
    }
});