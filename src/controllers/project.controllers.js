const { Project } = require("../models");

// Function qui me permet de vérifier si le nom n'est pas déjà utilisé
const validateDataCreateProject = async (req, res, next) => {
  const { name, dateProjet } = req.body;
  if (await Project.nameAlreadyExists(name)) {
    res.status(400).send("Name of project already used");
  } else if (!Project.dateAlreadyExist(dateProjet)) {
    res.status(400).send("The date of the project is already");
  } else {
    next();
  }
};

// Function qui me permet de crée un nouveau projet avec ça date de création
const createOneProject = async (req, res, next) => {
  const { name, dateProjet } = req.body;
  try {
    const [[projectWithName]] = await Project.findOneByName(name);
    if (!projectWithName) {
      const [result] = await Project.createOne({ name, dateProjet });
      const [[ProjectCreated]] = await Project.findOneById(result.insertId);
      res.status(201).json(ProjectCreated);
      next();
    } else {
      res.status(400).send("Name already used");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Function qui me permet de récupérer l'id
const getOneProjectById = async (req, res) => {
  const { id } = req;
  try {
    const [result] = await Project.findOneById(id);
    res.status(201).json(result[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  validateDataCreateProject,
  createOneProject,
  getOneProjectById,
};
