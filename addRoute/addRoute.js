import express from "express";
import addRouteController from "../addController/addRouteController.js"
import addSubjectController from "../addController/addSubjectController.js";

const addRouter=express.Router();

addRouter.post('/',addRouteController);
addRouter.post('/addsubject',addSubjectController);

export default addRouter;