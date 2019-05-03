const express = require("express");

const Projects = require("../data/models");

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const projects = await Projects.getProjects();
      res.status(200).json(projects);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the projects' });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const projects = await Projects.getProjectsById(req.params.id);
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: 'We could not find the project' });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the project' });
    }
  });


  //POST PROJECT
  router.post("/", (req, res) => {
    Projects
      .addProject(req.body, "id")
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error updating project" });
      });
  });


  router.put("/:id", (req, res) => {
    projects
      .editProject(req.params.id, req.body)
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error updating data" });
      });
  });

  module.exports = router;