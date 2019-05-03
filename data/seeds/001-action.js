
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('actions').insert([
    {description: 'I wanna rock n roll all night', notes: 'and party every-day', completed: 'false'},
    {description: 'I love rock n roll', notes: 'put another dime in the jukebox, baby', completed: 'true'},
    {description: 'I know it\'s only rock n roll', notes: 'but I like it, like it, yes I do', completed: 'false'}
  ]);
};
