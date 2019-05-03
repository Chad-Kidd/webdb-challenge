const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development)


module.exports = {
    getProjects,
    getActions,
    addProject,
    addAction,
    getProjectsById,
    getActionsById,
};
    function getProjects() {
        return db('projects')
    }

    function getActions(){
        return db('actions')
    }

   function addProject(projects) {
        return db('projects')
            .insert(projects)
            .then(res => {
                return res
            });
    }

    function addAction(actions) {
        return db('actions')
            .insert(actions)
            .then(res => {
                return res
            });
    }

    function getProjectsById(id) {
        return db('projects')
            .where({ id })
    }

    function getActionsById(id) {
        return db('actions')
            .where({ id })
    }

 