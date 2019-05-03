
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        //id
      tbl.increments();

      tbl
          .string('project_name')
          .notNullable();
      
      tbl
          .text('description')
          .notNullable();

      //completed boolean
      tbl 
          .boolean('completed');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('projects');
};