const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = require("./user.model.js")(mongoose);
db.companies = require("./company.model.js")(mongoose);
module.exports = db;
