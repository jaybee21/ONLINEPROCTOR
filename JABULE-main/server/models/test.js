const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    test_name: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    test_link_by_user: {
        type: String,
        required: true,
        unique: true
    },
    test_link: {
        type: String,
        default: "none"
    },
    test_code: {
        type: String,
        unique: true,
        default: "none"
    },
    start_time: {
        type: Date,
        required: true,
        default: Date.now()
    },
    end_time: {
        type: Date,
        required: true,
        default: Date.now()
    },
    no_of_candidates_appear: {
        type: Number,
        required: true
    },
    total_threshold_warnings: {
        type: Number,
        required: true,
        default: 3
    }
}, { timestamps: true });


module.exports = mongoose.model('Test', testSchema);