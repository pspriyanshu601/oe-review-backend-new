
# OE Review API Documantation



## Get all Departments name
Returns all departments name of the institute 

Example Request

**GET** `https://oe-review-backend-new.vercel.app/departments`

Example Response

```[{"department_name":"civilengineering"},{"department_name":"computerscienceandengineering"},{"department_name":"electricalengineering"},{"department_name":"electronicsengineering"},{"department_name":"environmentalscienceandengineering"},{"department_name":"fuelmineralsandmetallurgicalengineering"},{"department_name":"humanitiesandsocialsciences"},{"department_name":"managementstudiesandindustrialengineering"}]```

---

## Get all subjects of a department
Returns all subjects name of a particular department

**GET** `https://oe-review-backend-new.vercel.app/departments/:department_name`

Example Response

``` [{"subject_name":"Computer Networks","course_code":"ecd403","dept_name":"electronicsengineering"},{"subject_name":"signals","course_code":"ecc201","dept_name":"electronicsengineering"}]```

---

## Get all reviews of a particular subject 

Returns all reviews of a particular subject

**GET** `https://oe-review-backend-new.vercel.app/departments/:department_name/:course_code`

Example Response

```[{"id":1,"details":"bekar subject","stars":3,"review_date":"2024-02-02T00:00:00.000Z","department_name":"electronicsengineering","course_code":"ecd403","name":"Rohan Gupta"},{"id":2,"details":"faltu subject","stars":3,"review_date":"2022-12-30T00:00:00.000Z","department_name":"electronicsengineering","course_code":"ecd403","name":"main legend"}]```

---
