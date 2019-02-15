const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SelfCareSchema = new Schema ({
    task: String,
    description: String,
    byWhen: String,
    dateCompleted: String,
    cost: Number
});

const SelfCare = mongoose.model("SelfCare", SelfCareSchema);

module.exports = SelfCare;