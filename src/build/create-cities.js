const path = require("path");
const slugify = require("slugify");

const fetchCategories = async (cityName, { graphql }) => {
  const {
    errors,
    data: {
      categories: { nodes: categories },
    },
  } = await graphql(`
  {
    categories: allCategoriesJson(filter: {city: {eq: "${cityName}"}}) {
      nodes {
        databaseId
        percentage
      }
    }
  }
  `);

  if (errors) {
    throw new Error("Error while fetching cities");
  }

  return categories;
};

const createCity = async (
  { name: cityName, slug: citySlug, isBeta },
  { createPage, reporter, graphql }
) => {
  const categories = await fetchCategories(cityName, { graphql });

  reporter.info(`Create city: ${cityName}`);
  createPage({
    path: `/${citySlug}`,
    component: path.resolve(`src/templates/City.jsx`),
    context: {
      citySlug,
      cityName,
      categories,
      isBeta,
    },
  });
};

const create = async ({ graphql, reporter, actions: { createPage } }) => {
  const {
    errors,
    data: {
      allCities: { nodes: cities },
    },
  } = await graphql(`
    {
      allCities: allCitiesJson {
        nodes {
          name
          slug
          isBeta
        }
      }
    }
  `);

  if (errors) {
    throw new Error("Error while running GraphQL query for: City");
  }

  return Promise.all(
    cities.map((city) => createCity(city, { reporter, createPage, graphql }))
  );
};

module.exports = create;
