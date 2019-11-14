const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('examples').select('id', 'topic');
}

function findBy(filter) {
  //include role info here
  return db('examples').where(filter);
}

async function add(examples) {
  const [id] = await db('examples').insert(examples);

  return findById(id);
}

function findById(id) {
  return db('examples')
    .where({ id })
    .first();
}
