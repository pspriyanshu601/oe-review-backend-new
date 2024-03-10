CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name text
);



INSERT INTO departments 
(department_name) 
VALUES ('civilengineering'),
 ('computerscienceandengineering'),
 ('electricalengineering'),
 ('electronicsengineering'),
 ('environmentalscienceandengineering'),
 ('fuelmineralsandmetallurgicalengineering'),
 ('humanitiesandsocialsciences'),
 ('managementstudiesandindustrialengineering'),
 ('mathematicsandcomputing'),
 ('mechanicalengineering'),
 ('miningengineering'),
 ('petroleumengineering'),
 ('physics'),
 ('appliedgeology'),
 ('appliedgeophysics'),
 ('chemicalengineering'),
 ('chemistryandchemicalbiology');