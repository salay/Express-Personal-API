const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selfCareSchema = new Schema ({
    task: String,
    description: String,
    byWhen: String,
    dateCompleted: String,
    cost: Number
});

const selfCare = mongoose.model("SelfCare", selfCareSchema);

module.exports = selfCare;