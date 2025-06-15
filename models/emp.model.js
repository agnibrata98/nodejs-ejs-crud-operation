const mongoose  = require('mongoose');

const EmpSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


const EmpModel = mongoose.model('employee', EmpSchema);

module.exports = EmpModel;