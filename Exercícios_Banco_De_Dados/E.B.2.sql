--E.B.2 Faça um script que limpe e crie dados nas tabelas.

TRUNCATE navers, projects, navers_projects CASCADE;

INSERT INTO navers(
  name, 
  job_role, 
  birthdate, 
  admission_date, 
  created_at, 
  updated_at
  ) VALUES (
    'Gabriel Timm', 
    'Back-end developer', 
    '2000-05-21', 
    '2021-04-01', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
    );

INSERT INTO navers(
  name, 
  job_role, 
  birthdate, 
  admission_date, 
  created_at, 
  updated_at
  ) VALUES (
    'Henrique Garcia', 
    'Front-end developer', 
    '2000-05-03', 
    '2019-11-27', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
    ); 

INSERT INTO navers(
  name, 
  job_role, 
  birthdate, 
  admission_date, 
  created_at, 
  updated_at
  ) VALUES (
    'Felipe Leripio', 
    'Engenheiro de Produção', 
    '2000-01-04', 
    '2020-03-17', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
    ); 

INSERT INTO projects(
  name, 
  created_at, 
  updated_at
  ) VALUES (
    'Teste de Estágio', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
    ); 

INSERT INTO projects(
  name, 
  created_at, 
  updated_at
  ) VALUES (
    'Job pra google', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
    );

INSERT INTO projects(
  name, 
  created_at, 
  updated_at
  ) VALUES (
    'Projeto incrivelmente bom', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
    ); 

INSERT INTO navers_projects(
  naver_id, 
  project_id
  ) VALUES (
    (SELECT id FROM navers WHERE name='Gabriel Timm'),
    (SELECT id FROM projects WHERE name='Teste de Estágio')
  ); 

INSERT INTO navers_projects(
  naver_id, 
  project_id
  ) VALUES (
    (SELECT id FROM navers WHERE name='Felipe Leripio'),
    (SELECT id FROM projects WHERE name='Teste de Estágio')
  ); 

INSERT INTO navers_projects(
  naver_id, 
  project_id
  ) VALUES (
    (SELECT id FROM navers WHERE name='Henrique Garcia'),
    (SELECT id FROM projects WHERE name='Teste de Estágio')
  ); 

INSERT INTO navers_projects(
  naver_id, 
  project_id
  ) VALUES (
    (SELECT id FROM navers WHERE name='Gabriel Timm'),
    (SELECT id FROM projects WHERE name='Job pra google')
  ); 

INSERT INTO navers_projects(
  naver_id, 
  project_id
  ) VALUES (
    (SELECT id FROM navers WHERE name='Felipe Leripio'),
    (SELECT id FROM projects WHERE name='Job pra google')
  ); 

INSERT INTO navers_projects(
  naver_id, 
  project_id
  ) VALUES (
    (SELECT id FROM navers WHERE name='Henrique Garcia'),
    (SELECT id FROM projects WHERE name='Projeto incrivelmente bom')
  ); 

INSERT INTO navers_projects(
  naver_id, 
  project_id
  ) VALUES (
    (SELECT id FROM navers WHERE name='Gabriel Timm'),
    (SELECT id FROM projects WHERE name='Projeto incrivelmente bom')
  ); 

SELECT * FROM navers;
SELECT * FROM projects;
SELECT * FROM navers_projects;
