let router = require("express").Router();
// default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome!!"
  });
});
// Import services controller
var expenseServiceController = require("./expenseController");
//servies routes
router
  .route("/services")
  .get(expenseServiceController.index)
  .post(expenseServiceController.new);
router
  .route("/services/:service_id")
  .get(expenseServiceController.view)
  .patch(expenseServiceController.update)
  .put(expenseServiceController.update)
  .delete(expenseServiceController.delete);
// Export API routes
module.exports = router;
