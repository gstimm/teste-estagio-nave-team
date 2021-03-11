import Project from '../models/Project';

class ProjectController {
  async index(req, res) {
    try {
      const projects = await Project.query();
      return res.status(200).send(projects);
    } catch (err) {
      return res.status(404).send({ message: 'Projects not found.' });
    };
  };

  async show(req, res) {
    try {
      const { id } = req.params;

      const response = await Project
        .query()
        .findOne({ id })
        .withGraphFetched('navers');

      if (!response) {
        return res.status(404).send({ message: 'Project not found.' });
      };

      return res.status(200).send(response);
    } catch (err) {
      return res.status(400).send({ message: 'ID not found or wrong.' });
    };
  };

  async store(req, res) {
    try {
      const { name, navers } = req.body;

      const project = await Project.query().insert({
        name
      });

      if (navers.length < 1) {
        res.status(200).send({ ...project });
        return;
      };

      try {
        await Project.relatedQuery('navers')
          .for(project.id)
          .relate(navers);
      } catch (err) {
        return res.status(400).send({ message: 'Error creating new project.' });
      };

      res.status(200).send({ ...project, navers });
    } catch (err) {
      return res.status(400).send({ message: 'Bad Request.' });
    };
  };
};

export default new ProjectController();