const projectRouter = require("express").Router();
const { Project } = require("../models");
const { projectController } = require("../controllers");

projectRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await Project.findOneById(id);
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Créations de ma route post pour les projets
projectRouter.post(
  "/",
  projectController.validateDataCreateProject,
  projectController.createOneProject,
  projectController.getOneProjectById,
  (req, res) => {
    const { name, dateproject } = req.body;
    res.status(201).json({ name, dateproject });
  }
);

module.exports = projectRouter;
