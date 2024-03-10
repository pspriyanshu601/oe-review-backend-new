import express from "express";

import allDeptsController from "../subController/allDeps.js";
import deptSubjectsController from "../subController/deptSubjects.js";
import subReviewController from "../subController/subReview.js";

const subRouter=express.Router();

subRouter.get("/", allDeptsController);
subRouter.get("/:department_name",deptSubjectsController);
subRouter.get("/:department_name/:course_code",subReviewController);

export default subRouter;