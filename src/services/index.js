const contact = require('./contact/contact.service.js');
const user = require('./user/user.service.js');
const experiences = require('./experiences/experiences.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(contact);
  app.configure(user);
  app.configure(experiences);
};
