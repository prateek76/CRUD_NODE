// Import model
Exepense = require("./expenseModel");
// Handle index actions
exports.index = function(req, res) {
  Exepense.get(function(err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts
    });
  });
};
// Handle create services
exports.new = function(req, res) {
  var newservice = new Exepense();
  newservice.name = req.body.name ? req.body.name : newservice.name;
  //checks for transaction content
  newservice.transaction.push(req.body.transaction);
  newservice.save(function(err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New service created!",
      data: newservice
    });
  });
};
// Handle view
exports.view = function(req, res) {
  Exepense.findById(req.params.service_id, function(err, newservice) {
    if (err) res.send(err);
    res.json({
      message: "Contact details loading..",
      data: newservice
    });
  });
};
// Handle update info
exports.update = function(req, res) {
  Exepense.findById(req.params.service_id, function(err, newservice) {
    if (err) res.send(err);
    newservice.name = req.body.name ? req.body.name : newservice.name;
    // save and check for errors
    newservice.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "updated",
        data: newservice
      });
    });
  });
};
// Handle delete
exports.delete = function(req, res) {
  Exepense.remove(
    {
      _id: req.params.service_id
    },
    function(err, service) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "service deleted"
      });
    }
  );
};
