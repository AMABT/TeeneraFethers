// Initializes the `experiences` service on path `/experiences`
const createService = require('feathers-mongoose');
const createModel = require('../../models/experiences.model');
const hooks = require('./experiences.hooks');
const filters = require('./experiences.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'experiences',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/experiences', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('experiences');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
