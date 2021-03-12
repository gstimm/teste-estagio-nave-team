--E.B.5 Faça uma querie que traga todos os projetos com sua quantidade de navers.

SELECT projects.id, projects.name, (
  SELECT COUNT(*) as "Total de Navers" FROM navers_projects WHERE projects.id = navers_projects.project_id
  ) FROM projects;