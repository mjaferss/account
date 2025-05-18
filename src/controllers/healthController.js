// Health check controller
exports.health = (req, res) => {
  res.json({ status: 'OK' });
};
