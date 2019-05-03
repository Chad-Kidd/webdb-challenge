
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('actions').insert([
    {name: 'KISS', description: 'Bad ass rock n roll band one of them might be a cat', completed: 'false'},
    {name: 'Joan Jett', description: 'All around bad ass still rockin', completed: 'true'},
    {name: 'The Rolling Stones', description: 'Funky white guys who will never die', completed: 'false'}
  ]);
};
