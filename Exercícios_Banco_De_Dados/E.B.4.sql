--E.B.4 Faça uma querie que traga todos os projetos com seus respectivos navers.

SELECT projects.name as Project, (
  SELECT STRING_AGG(navers.name, ' , ') as Naver FROM navers_projects 
  INNER JOIN navers ON navers.id = navers_projects.naver_id
  WHERE projects.id = navers_projects.project_id
  ) FROM projects;

