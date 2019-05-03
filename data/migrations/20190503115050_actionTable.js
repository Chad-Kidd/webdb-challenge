
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        //id
      tbl.increments().unique();
  
      //description
      tbl
          .string('description')
          .notNullable();
     
      tbl
          .text('notes')
          .notNullable();
  
      //completed boolean
      tbl 
          .boolean('completed');
  
      //foreign key to connect to projects
      tbl 
          .integer('projects_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('project')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('actions');
  };