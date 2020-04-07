var mongoose = require("mongoose");
// Setup schema
var ExpenseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  transaction: [],
  create_date: {
    type: Date,
    default: Date.now
  }
});

var TransactionSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  uid: {
    type: String,
    required: true
  }
});

var Expense = (module.exports = mongoose.model("expense", ExpenseSchema));
module.exports.get = function(callback, limit) {
  Expense.find(callback).limit(limit);
};
