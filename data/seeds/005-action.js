
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('actions').insert([
    {projects_id: '1', description: 'I wanna rock n roll all night', notes: 'and party every-day', completed: 'false'},
    {projects_id: '1', description: 'I love rock n roll', notes: 'put another dime in the jukebox, baby', completed: 'true'},
    {projects_id: '3', description: 'I know it\'s only rock n roll', notes: 'but I like it, like it, yes I do', completed: 'false'}
  ]);
};
