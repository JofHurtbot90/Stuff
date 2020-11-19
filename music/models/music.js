const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const musicSchema = new Schema({
    artists: {
        artist_id: Number,
        required: true,
        sort_order: String
    },

    sort: {
        year: Number,
        title:String,
        format: String
    },

    labels: {
       label_id: Number,
       page: Number,
       required: true
       
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Music', musicSchema);