module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};

// catch exceptions and flash message
