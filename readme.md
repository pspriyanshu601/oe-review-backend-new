The API is hosted at [https://oe-review-backend-new.vercel.app/](https://oe-review-backend-new.vercel.app/)


# OE Review API Documantation

# Authentication 

## Register new user
Registers a new user in database

Example Request

**POST** `https://oe-review-backend-new.vercel.app/register`
```
{
    "username":"rohan singh",
    "email":"rohansingh@gmail.com",
    "password":"kelasantra"
}
```

Example Response
```
for new user->
{
    "success": true,
    "message": "User registered successfully"
}
if already exists then 
{
    "success": false,
    "message": "User already exists"
}
```

## User Login 
Allows users to login 

Example Request 

**POST** `https://oe-review-backend-new.vercel.app/login`
```
{
    "email":"rohansgh@gmail.com",
    "password":"kelasantra"
}
```

Example Response
```
{
    "success": true,
    "message": "User logged in successfully",
    "username": "rohan singh",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzEwMTMyMDg5LCJleHAiOjE3MTE0MjgwODl9.2ZO5MSEmmCUElktCwu1sizj6FK7EVzYqVdmMn1iJ-Xo"
}
```

---

# Get Endpoints

## Get all Departments name
Returns all departments name of the institute 

Example Request

**GET** `https://oe-review-backend-new.vercel.app/departments`

Example Response

```
[
    {
        "department_name": "civilengineering"
    },
    {
        "department_name": "computerscienceandengineering"
    },
    {
        "department_name": "electricalengineering"
    }
]
```



## Get all subjects of a department
Returns all subjects name of a particular department

**GET** `https://oe-review-backend-new.vercel.app/departments/:department_name`

Example Response

``` 
[
    {
        "subject_name": "Computer Networks",
        "course_code": "ecd403",
        "dept_name": "electronicsengineering"
    },
    {
        "subject_name": "signals",
        "course_code": "ecc201",
        "dept_name": "electronicsengineering"
    }
]
```


## Get all reviews of a particular subject 

Returns all reviews of a particular subject

**GET** `https://oe-review-backend-new.vercel.app/departments/:department_name/:course_code`

Example Response

```
[
    {
        "id": 1,
        "details": "bekar subject",
        "stars": 3,
        "review_date": "2024-02-02T00:00:00.000Z",
        "department_name": "electronicsengineering",
        "course_code": "ecd403",
        "name": "Rohan Gupta"
    },
    {
        "id": 2,
        "details": "faltu subject",
        "stars": 3,
        "review_date": "2022-12-30T00:00:00.000Z",
        "department_name": "electronicsengineering",
        "course_code": "ecd403",
        "name": "main legend"
    }
]
```

---

# Add Endpoints

## Add a Review 
Example Request

**POST** `https://oe-review-backend-new.vercel.app/add/`
```
{
    "details": "bekar subject",
    "stars": 3,
    "review_date": "2024-02-02",
    "department_name": "electronicsengineering",
    "course_code": "ecd403",
    "name": "Rohan Gupta"
}
```

Example Response
```
{
     message:'review has been added succesfully'
}
```

## Add a new Subject 
Example Request

**POST** `https://oe-review-backend-new.vercel.app/add/addsubject`
```
{
    "subject_name":"Digital Circuits",
    "course_code":"ecc203",
    "dept_name":"electronicsengineering"
}
```

Example Response

```
{
    message:'subject has been added succesfully'
}
```

---
