const createCities = require('./src/build/create-cities');

exports.createPages = async (helper) => {
  const { reporter } = helper;

  try {
    await createCities(helper);
  } catch (error) {
    reporter.error('Creating cities failed', error);
  }
};
