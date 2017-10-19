// experiences-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const experiences = new Schema({
    title: {type: String, required: true},
    image: {type: String, data: Buffer},
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });

  return mongooseClient.model('experiences', experiences);
};
