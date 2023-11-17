const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }

  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZhYWIzN2ZmZjdmZTZiOWE5OGFhNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAwMTQ1ODUyfQ.zQdQQmZ-fCGmqxWuEVGdXm7RSQnoDZPn9ciHhR9Q1k4";
  return token;
};
