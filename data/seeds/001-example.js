
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('examples').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('examples').insert([
        {
          topic: 'example1', 
          content: 'example1 content example1 content'
      },
      {
        topic: 'example2', 
        content: 'example2 content example2 content'
      },
      ]);
    });
};
