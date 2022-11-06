import { Router } from "express";
import * as PlayerController from "../controllers/PlayerController";

const router = Router();

router.get("/getPlayers", PlayerController.players);
router.post("/editPlayerMargin", PlayerController.editMargin);

export default router;
