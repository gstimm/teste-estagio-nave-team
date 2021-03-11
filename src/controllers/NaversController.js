import Naver from '../models/Naver';

class NaverController {
  async index(req, res) {
    try {
      const navers = await Naver.query();
      return res.status(200).send(navers);
    } catch (err) {
      return res.status(404).send({ message: 'Navers not found.' });
    };
  };

  async show(req, res) {
    try {
      const { id } = req.params;
    
      const response = await Naver
        .query()
        .findOne({ id })
        .withGraphFetched('projects');

      if (!response) {
        return res.status(404).send({ message: 'Naver not found.' });
      };

      return res.status(200).send(response);
    } catch (err) {
      return res.status(404).send({ message: 'ID not found or wrong.' });
    };
  };

  async store(req, res) {
    try {
      const {
        name,
        birthdate,
        admission_date,
        job_role,
        projects
      } = req.body;

      const naver = await Naver.query().insert({
        name,
        birthdate,
        admission_date,
        job_role
      });

      if (projects.length < 1) {
        res.status(200).send({ ...naver });
        return;
      };

      try {
        await Naver.relatedQuery('projects')
          .for(naver.id)
          .relate(projects);
      } catch (err) {
        return res.status(400).send({ message: 'Error creating new naver.' });
      };

      return res.status(200).send({ ...naver, projects });
    } catch (err) {
      console.log(err);
      return res.status(404).send(err);
    };
  };
};

export default new NaverController();