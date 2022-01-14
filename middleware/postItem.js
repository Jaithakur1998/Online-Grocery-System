module.exports = (req, res, next) => {
  console.log("I have been called");
  next();
};
