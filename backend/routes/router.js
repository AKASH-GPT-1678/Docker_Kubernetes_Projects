import { Router } from "express";
import express from 'express'

import { Register } from '../functions/Register.js';
import { Login } from "../functions/Register.js";
const router = express.Router();





router.post("/register" , Register)

router.post("/login" , Login)

export default router