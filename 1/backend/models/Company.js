const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    companyName: { type: String, required: true },
    ownerName: { type: String, required: true },
    rollNo: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    clientID: { type: String, required: true, unique: true },
    clientSecret: { type: String, required: true },
});

module.exports = mongoose.model("Company", companySchema);
