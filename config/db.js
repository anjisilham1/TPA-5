const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/tpa-5-anjis'

const db = mongoose.connect(DB_URL)

module.exports = db