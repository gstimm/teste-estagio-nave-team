--E.B.1 Crie um script que delete e crie todas as tabelas.

DROP TABLE IF EXISTS projects_navers,
projects,
navers;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

SELECT uuid_generate_v4();

CREATE TABLE IF NOT EXISTS navers(
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  job_role VARCHAR(255),
  birthdate DATE,
  admission_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS projects(
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS navers_projects(
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  naver_id uuid NOT NULL DEFAULT uuid_generate_v4(),
  project_id uuid NOT NULL DEFAULT uuid_generate_v4(),
  PRIMARY KEY (id),
  FOREIGN KEY (naver_id) REFERENCES navers (id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
);