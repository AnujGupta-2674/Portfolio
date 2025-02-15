const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    orgName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_no: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;