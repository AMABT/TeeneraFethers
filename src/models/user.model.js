require('mongoose-type-email');
// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const user = new mongooseClient.Schema({

    email: {
      type: mongooseClient.SchemaTypes.Email,
      unique: true,
      required: [true, 'Email is required']
    },
    password: { type: String, required: [true, 'Password is required'] },

    auth0Id: { type: String },

    googleId: { type: String },

    facebookId: { type: String },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('user', user);
};
