import { Router } from "express";
import { UserController } from "../controller/UserController";
import user from "./user";
import { checkJwt } from "../middleware/jwt";

