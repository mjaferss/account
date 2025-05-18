// Middleware: Permissions/Authorization (skeleton)
module.exports = function(requiredPermission) {
  return function(req, res, next) {
    // TODO: Check user permissions
    next();
  };
};
