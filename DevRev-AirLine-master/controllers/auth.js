const _ = require("lodash");
const User = require("../models/user");

// render the register page
module.exports.renderRegister = (req, res) => {
  res.render("auth/register");
};

// store user's data in DB and login
module.exports.register = async (req, res, next) => {
  try {
    let { name, username, password } = req.body;
    name = _.startCase(_.camelCase(name));
    const user = new User({ name, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  } catch (e) {
    req.flash("error", "Enter the details correctly!");
    res.redirect("/register");
  }
};

// render the login page
module.exports.renderLogin = (req, res) => {
  res.render("auth/login");
};

// check login details - authentication
module.exports.login = (req, res) => {
  const redirectUrl = req.session.returnTo || "/";
  req.flash("success", "Logged in successfully!");

  res.redirect(redirectUrl);
};

// logout user
module.exports.logout = (req, res) => {
  req.logout(function (err) {
    req.flash("success", "Logged out successfully!");

    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
