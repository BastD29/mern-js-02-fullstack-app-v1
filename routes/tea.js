import express from "express";
import tea from "../controllers/tea.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.post("/tea", upload.none(), tea.newTea);

// router.get("/tea", tea.getAllTea);
// router.delete("/tea", tea.deleteAllTea);
// router.get("/tea/:name", tea.getOneTea);
// router.post("/tea/:name", tea.newComment);
// router.delete("/tea/:name", tea.deleteOneTea);

export default router;
