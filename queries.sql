-- CREATE TABLE departments (
--     department_id SERIAL PRIMARY KEY,
--     department_name text
-- );

-- INSERT INTO departments 
-- (department_name) 
-- VALUES ('civilengineering'),
--  ('computerscienceandengineering'),
--  ('electricalengineering'),
--  ('electronicsengineering'),
--  ('environmentalscienceandengineering'),
--  ('fuelmineralsandmetallurgicalengineering'),
--  ('humanitiesandsocialsciences'),
--  ('managementstudiesandindustrialengineering'),
--  ('mathematicsandcomputing'),
--  ('mechanicalengineering'),
--  ('miningengineering'),
--  ('petroleumengineering'),
--  ('physics'),
--  ('appliedgeology'),
--  ('appliedgeophysics'),
--  ('chemicalengineering'),
--  ('chemistryandchemicalbiology');

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username text,
--     email text,
--     password text
-- );

-- CREATE TABLE subjects (
--     subject_id SERIAL PRIMARY KEY,
--     subject_name text,
--     course_code text,
--     department_name text
-- );

-- CREATE TABLE reviews(
--     id SERIAL PRIMARY KEY,
--     details text,
--     stars int,
--     review_date date,
--     department_name text,
--     course_code text,
--     name text
-- );


-- INSERT INTO subjects (subject_name,course_code,department_name)
-- VALUES ('Computer Networks','ecd403','electronicsengineering');

ALTER TABLE subjects 
RENAME COLUMN department_name to dept_name;