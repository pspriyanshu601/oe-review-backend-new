import express from "express";
import addRouteController from "../addController/addRouteController.js"

const addRouter=express.Router();

addRouter.post('/',addRouteController);

export default addRouter;