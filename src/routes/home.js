import express from "express";
import HomeController from '../controller/HomeController.js';

const router  = express.Router();
const homeController = new HomeController();

router.get('/', (req, res) => {
    res.send(homeController.handlehome());
});

export default router;