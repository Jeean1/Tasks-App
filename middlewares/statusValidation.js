const statusValidation = (req, res, next) => {
  const { status } = req.params;

  const validations = ["completed", "active", "late", "cancelled"];

  if (!validations.includes(status)) {
    return res.status(404).json({
      status: "error",
      message: `Not found status ${status}`,
    });
  }

  req.status = status;

  next();
};

module.exports = { statusValidation };
